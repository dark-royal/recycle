import React, { useState } from 'react';
import styles from './index.module.css';

const ViewAllWaste = () => {
    const [wasteType, setWasteType] = useState('');
    const [filteredWasteList, setFilteredWasteList] = useState([]);
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    const wasteData = [
        { type: 'paper', quantity: '10 kg', date: '2024-08-14' },
        { type: 'nylon', quantity: '5 kg', date: '2024-08-13' },
        { type: 'ion', quantity: '7 kg', date: '2024-08-12' },
        { type: 'paper', quantity: '12 kg', date: '2024-08-11' },
        // Add more waste data here
    ];

    const handleWasteTypeChange = (event) => {
        setWasteType(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const filteredData = wasteData.filter(waste =>
            waste.type.toLowerCase() === wasteType.toLowerCase()
        );

        if (filteredData.length > 0) {
            setFilteredWasteList(filteredData);
            setResponse({ message: 'Waste data retrieved successfully!' });
            setError(null);
        } else {
            setFilteredWasteList([]);
            setResponse(null);
            setError('No waste items found for the selected type.');
        }
    };

    return (
        <div className={styles.viewAllWaste}>
            <h1>View All Waste</h1>
            <form onSubmit={handleSubmit} className={styles.viewAllWasteForm}>
                <div className={styles.formGroup}>
                    <label htmlFor="wasteType">Waste Type:</label>
                    <select
                        id="wasteType"
                        value={wasteType}
                        onChange={handleWasteTypeChange}
                        required
                    >
                        <option value="" disabled>Select Waste Type</option>
                        <option value="paper">Paper</option>
                        <option value="nylon">Nylon</option>
                        <option value="ion">Ion</option>
                        {/* Add more waste type options here */}
                    </select>
                </div>
                <button type="submit" className={styles.viewAllWasteSubmit}>Submit</button>
            </form>

            {response && (
                <div className={styles.responseMessage}>
                    <h3>Response:</h3>
                    <p>{response.message}</p>
                </div>
            )}
            {error && (
                <div className={styles.errorMessage}>
                    <h3>Error:</h3>
                    <p>{error}</p>
                </div>
            )}

            <div className={styles.wasteList}>
                <h2>Waste Items:</h2>
                {filteredWasteList.length > 0 ? (
                    <ul>
                        {filteredWasteList.map((waste, index) => (
                            <li key={index}>
                                <strong>Type:</strong> {waste.type} <br />
                                <strong>Quantity:</strong> {waste.quantity} <br />
                                <strong>Date:</strong> {waste.date}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No waste items available.</p>
                )}
            </div>
        </div>
    );
};

export default ViewAllWaste;

