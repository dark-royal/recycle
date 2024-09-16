import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDarkMode } from './DarkModeContext'; // Import the hook

const AdminDashboard = () => {
    const { darkMode } = useDarkMode(); // Use the context
    const [users, setUsers] = useState([]);
    const [waste, setWaste] = useState([]);
    const [loadingUsers, setLoadingUsers] = useState(true);
    const [loadingWaste, setLoadingWaste] = useState(true);
    const [errorUsers, setErrorUsers] = useState(null);
    const [errorWaste, setErrorWaste] = useState(null);

    // Fetch users data from the backend
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('https://g-cycle-latest-1.onrender.com/api/v1/admin/manageUsers');
                console.log('Fetched Users:', response.data); // Log to verify structure

                // Check if 'users' is an array in the response data
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

                console.log('Fetched Waste:', response.data); // Log the entire response

                // Access waste data from response.data.wastes
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
                        <li><a href="/users" className={`block p-2 hover:bg-gray-700 rounded ${darkMode ? 'text-white' : 'text-black'}`}>Manage Users</a></li>
                        <li><a href="/waste" className={`block p-2 hover:bg-gray-700 rounded ${darkMode ? 'text-white' : 'text-black'}`}>Manage Waste</a></li>
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

                    {/* Users Table */}
                    <div className="mt-8 shadow rounded-lg p-6">
                        <h3 className="text-lg font-bold">Manage Users</h3>
                        {loadingUsers ? (
                            <p>Loading users...</p>
                        ) : errorUsers ? (
                            <p>{errorUsers}</p>
                        ) : (
                            <table className="w-full text-left">
                                <thead>
                                <tr>
                                    <th className="p-2">Name</th>
                                    <th className="p-2">Email</th>
                                    <th className="p-2">Phone Number</th>
                                </tr>
                                </thead>
                                <tbody>
                                {users.length > 0 ? users.map(user => (
                                    <tr key={user.userId}> {/* Ensure userId is correct */}
                                        <td className="p-2">{user.username}</td>
                                        <td className="p-2">{user.email}</td>
                                        <td className="p-2">{user.phoneNumber || 'N/A'}</td>
                                    </tr>
                                )) : (
                                    <tr>
                                        <td className="p-2" colSpan="3">No users available</td>
                                    </tr>
                                )}
                                </tbody>
                            </table>
                        )}
                    </div>

                    {/* Waste Data */}
                    <div className="mt-8 shadow rounded-lg p-6">
                        <h3 className="text-lg font-bold">Manage Waste</h3>
                        {loadingWaste ? (
                            <p>Loading waste data...</p>
                        ) : errorWaste ? (
                            <p>{errorWaste}</p>
                        ) : (
                            <div>
                                {waste.length > 0 ? (
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                        <tr className="">
                                            <th className="p-2 border-b">Waste ID</th>
                                            <th className="p-2 border-b">Waste Type</th>
                                            <th className="p-2 border-b">Quantity</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {waste.map(item => (
                                            <tr key={item.wasteId}>
                                                <td className="p-2 border-b">{item.wasteId}</td>
                                                <td className="p-2 border-b">{item.type}</td>
                                                <td className="p-2 border-b">{item.quantity ? `${item.quantity} kg` : 'N/A'}</td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                ) : (
                                    <p>No waste data available</p>
                                )}
                            </div>
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AdminDashboard;
