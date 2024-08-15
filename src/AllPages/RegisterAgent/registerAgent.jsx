import React, { useState } from 'react';
import styles from './index.module.css';

const RegisterAgents = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!name || !email || !phone) {
            setError('All fields are required.');
            setResponse(null);
            return;
        }

        // Simulate agent registration
        const simulatedResponse = {
            message: `Agent ${name} registered successfully!`,
            agent: {
                name,
                email,
                phone
            }
        };

        setResponse(simulatedResponse);
        setError(null);
    };

    return (
        <div className={styles.registerAgent}>
            <h1>Register Agent</h1>
            <form onSubmit={handleSubmit} className={styles.registerAgentForm}>
                <div className={styles.formGroup}>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={handleNameChange}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="phone">Phone:</label>
                    <input
                        type="tel"
                        id="phone"
                        value={phone}
                        onChange={handlePhoneChange}
                        required
                    />
                </div>
                <button type="submit" className={styles.registerAgentSubmit}>Register Agent</button>
            </form>

            {response && (
                <div className={styles.responseMessage}>
                    <h3>{response.message}</h3>
                    <p><strong>Name:</strong> {response.agent.name}</p>
                    <p><strong>Email:</strong> {response.agent.email}</p>
                    <p><strong>Phone:</strong> {response.agent.phone}</p>
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

export default RegisterAgents;
