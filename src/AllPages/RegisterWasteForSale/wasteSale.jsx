import React, { useState } from 'react';
import axios from 'axios';
import styles from './index.module.css';
import Navbar from "../Navbar/Navbar";

// Waste categories
const wasteCategories = ['POLYTHENEBAG', 'PLASTIC', 'PAPER'];

// Function to store data in localStorage
const storeUserData = (weight, points) => {
    const getDayKey = (daysAgo = 0) => {
        const date = new Date();
        date.setDate(date.getDate() - daysAgo);
        return date.toISOString().split('T')[0]; // YYYY-MM-DD format
    };

    const dayKey = getDayKey();
    const existingWeight = parseFloat(localStorage.getItem(`${dayKey}_wasteQuantity`)) || 0;
    const existingPoints = parseFloat(localStorage.getItem(`${dayKey}_points`)) || 0;

    localStorage.setItem(`${dayKey}_wasteQuantity`, (existingWeight + weight).toString());
    localStorage.setItem(`${dayKey}_points`, (existingPoints + points).toString());
};

const RegisterWasteForSale = () => {
    const [username, setUsername] = useState(''); // Username state
    const [wasteType, setWasteType] = useState(''); // Waste type state
    const [quantity, setQuantity] = useState(''); // Quantity state
    const [response, setResponse] = useState(null); // Response state
    const [error, setError] = useState(null); // Error state

    // Handle input changes
    const handleUsernameChange = (event) => setUsername(event.target.value);
    const handleWasteTypeChange = (event) => setWasteType(event.target.value);
    const handleQuantityChange = (event) => setQuantity(event.target.value);

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!username || !wasteType || !quantity) {
            setError('All fields are required.');
            setResponse(null);
            return;
        }

        const quantityNumber = parseFloat(quantity);

        if (isNaN(quantityNumber) || quantityNumber <= 0) {
            setError('Please enter a valid quantity.');
            setResponse(null);
            return;
        }

        try {
            // Fetch user ID by username
            const token = localStorage.getItem('accessToken');
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            };

            const userResponse = await axios.get(`https://g-cycle-latest-1.onrender.com/api/v1/user/id`, {
                params: { username: username },
                ...config
            });

            if (!userResponse.data || !userResponse.data.id) {
                throw new Error('User not found.');
            }

            const userId = userResponse.data.id;

            // Create request payload with userId
            const sellWasteRequest = {
                type: wasteType,
                quantity: quantityNumber,
                userId: userId,  // Include userId instead of username
            };

            // Calculate points (e.g., 1 point per kg)
            const pointsEarned = quantityNumber;

            // Store data in localStorage
            storeUserData(quantityNumber, pointsEarned);

            // Send the sellWaste request to backend
            const res = await axios.post('https://g-cycle-latest-1.onrender.com/api/v1/user/sellWaste', sellWasteRequest, config);

            setResponse({ message: res.data.message, waste: sellWasteRequest });
            setError(null);
        } catch (err) {
            console.error('Error details:', err); // Log the error details for better debugging
            setError('Failed to register waste: ' + (err.response?.data?.message || err.message));
            setResponse(null);
        }
    };

    return (
        <div>
            <Navbar />
            <div className={styles.registerWasteForSale}>
                <h1>Register Waste for Sale</h1>
                <form onSubmit={handleSubmit} className={styles.registerWasteForSaleForm}>
                    <div className={styles.formGroup}>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={handleUsernameChange}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="wasteType">Waste Type:</label>
                        <select
                            id="wasteType"
                            value={wasteType}
                            onChange={handleWasteTypeChange}
                            required
                        >
                            <option value="" disabled>Select Waste Type</option>
                            {wasteCategories.map((category) => (
                                <option key={category} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="quantity">Quantity (kg):</label>
                        <input
                            type="number"
                            id="quantity"
                            value={quantity}
                            onChange={handleQuantityChange}
                            required
                        />
                    </div>

                    <button type="submit" className={styles.registerWasteForSaleSubmit}>
                        Register Waste
                    </button>
                </form>

                {response && (
                    <div className={styles.responseMessage}>
                        <h3>{response.message}</h3>
                        <p><strong>Waste Type:</strong> {response.waste.type}</p>
                        <p><strong>Quantity:</strong> {response.waste.quantity} kg</p>
                    </div>
                )}

                {error && (
                    <div className={styles.errorMessage}>
                        <h3>Error:</h3>
                        <p>{error}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default RegisterWasteForSale;
