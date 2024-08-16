import React, { useState } from 'react';
import axios from 'axios';
import styles from './index.module.css';
import Navbar from "../Navbar/Navbar";

// Define waste categories
const wasteCategories = [
    'POLYTHENEBAG',
    'PLASTIC',
    'PAPER',
];

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
    const [wasteType, setWasteType] = useState('');
    const [quantity, setQuantity] = useState('');
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    const handleWasteTypeChange = (event) => {
        setWasteType(event.target.value);
    };

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!wasteType || !quantity) {
            setError('All fields are required.');
            setResponse(null);
            return;
        }

        const quantityNumber = parseFloat(quantity);
        const userId = localStorage.getItem('userId');

        try {
            const sellWasteRequest = {
                type: wasteType,
                quantity: quantityNumber,
            };

            // Calculate points (e.g., 1 point per kg)
            const pointsEarned = quantityNumber;

            // Store data in localStorage
            storeUserData(quantityNumber, pointsEarned);

            // Optional: Send to backend
            const token = localStorage.getItem('accessToken');
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            };
            const res = await axios.post('https://g-cycle-latest-1.onrender.com/api/v1/user/sellWaste', sellWasteRequest, config);

            setResponse({ message: res.data.message, waste: sellWasteRequest });
            setError(null);
        } catch (err) {
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

                    <button type="submit" className={styles.registerWasteForSaleSubmit}>Register Waste</button>
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
