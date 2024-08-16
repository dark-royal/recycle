import React, { useState } from 'react';
import styles from './index.module.css';

const ManageUsers = () => {
    const [username, setUsername] = useState('');
    const [action, setAction] = useState('');
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [users, setUsers] = useState([]);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handleActionChange = (event) => {
        setAction(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!username || !action) {
            setError('Please provide both username and action.');
            setResponse(null);
            return;
        }

        let successMessage = '';
        let updatedUsers = [...users];

        if (action === 'add') {
            successMessage = `User ${username} added successfully!`;
            updatedUsers.push(username);
        } else if (action === 'remove') {
            successMessage = `User ${username} removed successfully!`;
            updatedUsers = updatedUsers.filter(user => user !== username);
        } else if (action === 'update') {
            successMessage = `User ${username} updated successfully!`;

        }

        setUsers(updatedUsers);
        setResponse({ message: successMessage });
        setError(null);

        // Clear the form inputs
        setUsername('');
        setAction('');
    };

    return (
        <div className={styles.manageUsers}>
            <h1>Manage Users</h1>
            <form onSubmit={handleSubmit} className={styles.manageUsersForm}>
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
                    <label htmlFor="action">Action:</label>
                    <select id="action" value={action} onChange={handleActionChange} required>
                        <option value="" disabled>Select Action</option>
                        <option value="add">Add User</option>
                        <option value="remove">Remove User</option>
                        <option value="update">Update User</option>
                    </select>
                </div>
                <button type="submit" className={styles.manageUsersSubmit}>Submit</button>
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

            <div className={styles.userList}>
                <h2>Current Users:</h2>
                {users.length > 0 ? (
                    <ul>
                        {users.map((user, index) => (
                            <li key={index}>{user}</li>
                        ))}
                    </ul>
                ) : (
                    <p>No users available.</p>
                )}
            </div>
        </div>
    );
};

export default ManageUsers;


