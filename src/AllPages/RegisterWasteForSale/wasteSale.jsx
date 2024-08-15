import React, { useState } from 'react';
import axios from 'axios';
import styles from './index.module.css';

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

        // Checking if fields are filled
        if (!wasteType || !quantity) {
            setError('All fields are required.');
            setResponse(null);
            return;
        }

        try {
            const sellWasteRequest = {
                type: wasteType,
                quantity: quantity,
            };

            // Retrieve the token from local storage
            const token = localStorage.getItem('accessToken');
            console.log("Access token:", token)
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`, // Use the token in the Authorization header
                }
            };

            const res = await axios.post('http://localhost:8080/api/v1/user/sellWaste', sellWasteRequest, config);

            const registeredWaste = {
                id: res.data.id,
                ...sellWasteRequest
            };

            setResponse({ message: res.data.message, waste: registeredWaste });
            setError(null);
        } catch (err) {
            setError('Failed to register waste: ' + (err.response?.data?.message || err.message));
            setResponse(null);
        }
    };

    return (
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
    );
};

export default RegisterWasteForSale;
