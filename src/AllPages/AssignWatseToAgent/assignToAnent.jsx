import React, { useState } from 'react';
import styles from './index.module.css';

const AssignWasteToAgent = () => {
    const [wasteType, setWasteType] = useState('');
    const [agentName, setAgentName] = useState('');
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    const wasteData = [
        { type: 'paper', agent: '' },
        { type: 'nylon', agent: '' },
        { type: 'ion', agent: '' },

    ];

    const handleWasteTypeChange = (event) => {
        setWasteType(event.target.value);
    };

    const handleAgentNameChange = (event) => {
        setAgentName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const wasteItem = wasteData.find(waste => waste.type.toLowerCase() === wasteType.toLowerCase());

        if (wasteItem) {
            wasteItem.agent = agentName;
            setResponse({ message: `Waste type '${wasteType}' assigned to agent '${agentName}' successfully!` });
            setError(null);
        } else {
            setResponse(null);
            setError(`Waste type '${wasteType}' not found.`);
        }
    };

    return (
        <div className={styles.assignWasteToAgent}>
            <h1>Assign Waste to Agent</h1>
            <form onSubmit={handleSubmit} className={styles.assignWasteToAgentForm}>
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

                    </select>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="agentName">Agent Name:</label>
                    <input
                        type="text"
                        id="agentName"
                        value={agentName}
                        onChange={handleAgentNameChange}
                        required
                    />
                </div>
                <button type="submit" className={styles.assignWasteToAgentSubmit}>Submit</button>
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
        </div>
    );
};

export default AssignWasteToAgent;
