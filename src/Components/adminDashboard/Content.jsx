import React from 'react';
import { useDarkMode } from './DarkModeContext'; // Import the hook

const AdminDashboard = () => {
    const { darkMode } = useDarkMode(); // Use the context

    return (
        <div className={`min-h-screen flex flex-col ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
            {/* Navbar */}
            <header className={`p-4 flex justify-between items-center ${darkMode ? 'bg-gray-800' : 'bg-white'} ${darkMode ? 'text-white' : 'text-black'}`}>
                <h1 className="text-xl font-bold">Admin Dashboard</h1>
                <nav>
                    <ul className="flex space-x-4 rounded-2xl">
                        <li><a href="/dashboard" className="hover:text-gray-300">Dashboard</a></li>
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
                        <li><a href="/dashboard" className={`block p-2 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-300'} ${darkMode ? 'text-white' : 'text-black'}`}>Dashboard</a></li>
                        <li><a href="/users" className={`block p-2 hover:bg-gray-700 rounded ${darkMode ? 'text-white' : 'text-black'}`}>Manage Users</a></li>
                        <li><a href="/waste" className={`block p-2 hover:bg-gray-700 rounded ${darkMode ? 'text-white' : 'text-black'}`}>Manage Waste</a></li>
                        <li><a href="/reports" className={`block p-2 hover:bg-gray-700 rounded ${darkMode ? 'text-white' : 'text-black'}`}>Reports</a></li>
                    </ul>
                </aside>

                {/* Dashboard Cards */}
                <main className="flex-grow p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className={`bg-gray-800 shadow rounded-lg p-6 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
                            <h2 className={`text-lg font-bold${darkMode ?'bg-gray-800 text-white': 'bg-white text-black'}`}>Total Waste Sold</h2>
                            <p className="text-2xl">1200 kg</p>
                        </div>
                        <div className={`bg-gray-800shadow rounded-lg p-6 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
                            <h2 className="text-lg font-bold">Total Revenue</h2>
                            <p className="text-2xl">$15,000</p>
                        </div>
                        <div className={`bg-gray-800 shadow rounded-lg p-6 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
                            <h2 className="text-lg font-bold">Total Users</h2>
                            <p className="text-2xl">150</p>
                        </div>
                        <div className={`bg-gray-800 shadow rounded-lg p-6 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
                            <h2 className="text-lg font-bold">New Signups</h2>
                            <p className="text-2xl">30</p>
                        </div>
                    </div>

                    {/* Charts and Tables */}
                    <div className="mt-8">
                        {/* Placeholder for chart */}
                        <div className={`bg-gray-800 shadow rounded-lg p-6 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
                            <h3 className="text-lg font-bold">Waste Sold Over Time</h3>
                            <div className="h-48 bg-gray-100">[Chart]</div>
                        </div>

                        {/* Placeholder for user table */}
                        <div className="mt-8  shadow rounded-lg p-6">
                            <h3 className="text-lg font-bold">Recent Users</h3>
                            <table className="w-full text-left">
                                <thead>
                                <tr>
                                    <th className="p-2">Name</th>
                                    <th className="p-2">Email</th>
                                    <th className="p-2">Role</th>
                                </tr>
                                </thead>
                                <tbody>
                                {/* Replace with dynamic content */}
                                <tr>
                                    <td className="p-2">John Doe</td>
                                    <td className="p-2">john@example.com</td>
                                    <td className="p-2">User</td>
                                </tr>
                                <tr>
                                    <td className="p-2">Jane Smith</td>
                                    <td className="p-2">jane@example.com</td>
                                    <td className="p-2">Admin</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AdminDashboard;
