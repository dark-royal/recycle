import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDarkMode } from './DarkModeContext'; // Import the hook

const AdminDashboard = () => {
    const { darkMode } = useDarkMode(); // Use the context
    const [users, setUsers] = useState([]);
    const [waste, setWaste] = useState([]);
    const [selectedUser, setSelectedUser] = useState('');
    const [paymentAmount, setPaymentAmount] = useState('');
    const [paymentError, setPaymentError] = useState('');
    const [, setLoadingUsers] = useState(true);
    const [, setLoadingWaste] = useState(true);
    const [, setErrorUsers] = useState(null);
    const [, setErrorWaste] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('https://g-cycle-latest-1.onrender.com/api/v1/admin/manageUsers');

                if (Array.isArray(response.data.users)) {
                    setUsers(response.data.users);

                    if (response.data.users.length > 0) {
                        const firstUser = response.data.users[0];
                        localStorage.setItem('name', firstUser.username);
                        localStorage.setItem('email', firstUser.email);
                        localStorage.setItem('phoneNumber', firstUser.phoneNumber);
                    }
                } else {
                    setErrorUsers('Unexpected data format');
                }
            } catch (error) {
                console.error('Error fetching users:', error.response || error.message);
                setErrorUsers('Error fetching users');
            } finally {
                setLoadingUsers(false);
            }
        };

        const fetchWaste = async () => {
            try {
                const response = await axios.get('https://g-cycle-latest-1.onrender.com/api/v1/admin/viewAllWaste');

                if (response.data && Array.isArray(response.data.wastes)) {
                    setWaste(response.data.wastes);
                } else {
                    console.error('Unexpected waste data format:', response.data);
                    setErrorWaste('Unexpected waste data format');
                    setWaste([]); // Set empty array if format is incorrect
                }
            } catch (error) {
                console.error('Error fetching waste data:', error.response || error.message);
                setErrorWaste('Error fetching waste data');
            } finally {
                setLoadingWaste(false);
            }
        };

        fetchUsers();
        fetchWaste();
    }, []);

    const calculateTotalWaste = (wasteArray) => {
        return wasteArray.reduce((total, item) => {
            return total + (item.quantity || 0);
        }, 0);
    };

    const handlePayment = async () => {
        if (!selectedUser || !paymentAmount) {
            setPaymentError('Please select a user and enter an amount.');
            return;
        }

        try {
            const response = await axios.post(
                'https://g-cycle-latest-1.onrender.com/api/v1/admin/makePayment',
                {
                    userId: selectedUser,
                    amount: paymentAmount
                }
            );
            console.log("Payment", response.data);
            console.log(response.data.data.authorization_url)

            if (response.data && response.data.status) {
                window.location.href = response.data.data.authorization_url;
            } else {
                setPaymentError('Failed to initiate payment.');
            }
        } catch (error) {
            console.error('Error making payment:', error.response || error.message);
            // Display specific error message based on the error response
            if (error.response) {
                setPaymentError(`Payment error: ${error.response.data.message || 'An unexpected error occurred'}`);
            } else {
                setPaymentError('Payment error: Network or server issue');
            }
        }
    };

    return (
        <div className={`min-h-screen flex flex-col ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
            {/* Navbar */}
            <header className={`p-4 flex justify-between items-center ${darkMode ? 'bg-gray-800' : 'bg-white'} ${darkMode ? 'text-white' : 'text-black'}`}>
                <h1 className="text-xl font-bold">Admin Dashboard</h1>
                <nav>
                    <ul className="flex space-x-4 rounded-2xl">
                        <li><a href="/adminDashboard" className="hover:text-gray-300">Dashboard</a></li>
                        <li><a href="/users" className="hover:text-gray-300">Users</a></li>
                        <li><a href="/reports" className="hover:text-gray-300">Reports</a></li>
                    </ul>
                </nav>
            </header>

            {/* Main Content */}
            <div className="flex flex-grow">
                {/* Sidebar */}
                <aside className={`w-64 p-4 rounded-bottom-only ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'}`}>
                    <ul className="space-y-4">
                        <li><a href="/adminDashboard" className={`block p-2 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-300'} ${darkMode ? 'text-white' : 'text-black'}`}>Dashboard</a></li>
                        <li><a href="/manageUsers" className={`block p-2 hover:bg-gray-700 rounded ${darkMode ? 'text-white' : 'text-black'}`}>Manage Users</a></li>
                        <li><a href="/manageWaste" className={`block p-2 hover:bg-gray-700 rounded ${darkMode ? 'text-white' : 'text-black'}`}>Manage Waste</a></li>
                        <li><a href="/reports" className={`block p-2 hover:bg-gray-700 rounded ${darkMode ? 'text-white' : 'text-black'}`}>Reports</a></li>
                    </ul>
                </aside>

                {/* Dashboard Cards */}
                <main className="flex-grow p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div
                            className={`bg-gray-800 shadow rounded-lg p-6 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}
                        >
                            <h2 className="text-lg font-bold">Total Waste Sold</h2>
                            <p className="text-2xl">
                                {calculateTotalWaste(waste)} kg
                            </p>
                        </div>
                        <div
                            className={`bg-gray-800 shadow rounded-lg p-6 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
                            <h2 className="text-lg font-bold">Total Revenue</h2>
                            <p className="text-2xl">$15,000</p>
                        </div>
                        <div
                            className={`bg-gray-800 shadow rounded-lg p-6 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
                            <h2 className="text-lg font-bold">Total Users</h2>
                            <p className="text-2xl">{users.length || 0}</p>
                        </div>
                    </div>

                    {/* Payment Section */}
                    <div className={`mt-8 shadow rounded-lg p-6 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
                        <h3 className="text-lg font-bold">Make Payment</h3>
                        <form onSubmit={(e) => { e.preventDefault(); handlePayment(); }}>
                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-2" htmlFor="user">
                                    Select User
                                </label>
                                <select
                                    id="user"
                                    value={selectedUser}
                                    onChange={(e) => setSelectedUser(e.target.value)}
                                    className={`w-full border p-2 rounded ${darkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300 bg-white text-black'}`}
                                    required
                                >
                                    <option value="">Select a user</option>
                                    {users.map(user => (
                                        <option key={user.userId} value={user.userId}>
                                            {user.username}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-2" htmlFor="amount">
                                    Amount (in USD)
                                </label>
                                <input
                                    type="number"
                                    id="amount"
                                    value={paymentAmount}
                                    onChange={(e) => setPaymentAmount(e.target.value)}
                                    className={`w-full border p-2 rounded ${darkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300 bg-white text-black'}`}
                                    required
                                />
                            </div>
                            {paymentError && <p className="text-red-500">{paymentError}</p>}
                            <button
                                type="submit"
                                className={`bg-blue-500 text-white px-4 py-2 rounded ${darkMode ? 'hover:bg-blue-700' : 'hover:bg-blue-400'}`}
                            >
                                Initiate Payment
                            </button>
                        </form>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AdminDashboard;
