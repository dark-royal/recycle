import React, { useState } from 'react';
import axios from 'axios';
import styles from './index.module.css';
import Navbar from "../Navbar/Navbar";

const wasteCategories = [
    'POLYTHENEBAG',
    'PLASTIC',
    'PAPER',
];

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

            // Accumulate waste quantity
            let accumulatedWaste = parseFloat(localStorage.getItem('wasteQuantity') || '0');
            accumulatedWaste += quantityNumber;
            localStorage.setItem('wasteQuantity', accumulatedWaste.toString());

            // Accumulate points
            let totalPoints = parseFloat(localStorage.getItem('userPoints') || '0');
            totalPoints += pointsEarned;
            localStorage.setItem('userPoints', totalPoints.toString());

            // Optional: Send to backend
            const token = localStorage.getItem('accessToken');
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            };
            const res = await axios.post('http://localhost:8080/api/v1/user/sellWaste', sellWasteRequest, config);

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
