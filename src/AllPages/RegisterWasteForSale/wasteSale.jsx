import React, { useState } from 'react';
import styles from './index.module.css';

const wasteCategories = [
    'Nylon',
    'Paper',
    'Iron',
    'Plastic',
    'Glass',
    'Organic',
    'Electronic',

];

const RegisterWasteForSale = () => {
    const [wasteType, setWasteType] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    const handleWasteTypeChange = (event) => {
        setWasteType(event.target.value);
    };

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };

    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!wasteType || !quantity || !price) {
            setError('All fields are required.');
            setResponse(null);
            return;
        }

        // Simulate waste registration
        const simulatedResponse = {
            message: 'Waste registered for sale successfully!',
            waste: {
                wasteType,
                quantity,
                price
            }
        };

        setResponse(simulatedResponse);
        setError(null);
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
                <div className={styles.formGroup}>
                    <label htmlFor="price">Price ($):</label>
                    <input
                        type="number"
                        id="price"
                        value={price}
                        onChange={handlePriceChange}
                        required
                    />
                </div>
                <button type="submit" className={styles.registerWasteForSaleSubmit}>Register Waste</button>
            </form>

            {response && (
                <div className={styles.responseMessage}>
                    <h3>{response.message}</h3>
                    <p><strong>Waste Type:</strong> {response.waste.wasteType}</p>
                    <p><strong>Quantity:</strong> {response.waste.quantity} kg</p>
                    <p><strong>Price:</strong> ${response.waste.price}</p>
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
