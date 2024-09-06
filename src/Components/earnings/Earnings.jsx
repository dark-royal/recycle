import React, { useState, useEffect } from 'react';
import Navbar from "../Navbar";

const Earnings = () => {
    const [withdrawAmount, setWithdrawAmount] = useState('');
    const [message, setMessage] = useState('');
    const [userId, setUserId] = useState(null);
    const [username, setUsername] = useState('');
    const [points, setPoints] = useState(0); // State for points
    const withdrawalThreshold = 1000;

    useEffect(() => {
        // Retrieve user ID, username, and total points from localStorage
        const storedUserId = localStorage.getItem('userId');
        const storedUsername = localStorage.getItem('username');
        const totalPoints = localStorage.getItem('totalPoints') || 0; // Get the cumulative total points from localStorage

        if (storedUserId) {
            setUserId(storedUserId);
        }
        if (storedUsername) {
            setUsername(storedUsername);
        }
        if (totalPoints) {
            setPoints(parseInt(totalPoints, 10) || 0); // Parse and set the total points
        }
    }, []);

    const handleWithdraw = async () => {
        const amount = parseInt(withdrawAmount, 10);
        if (!amount || amount <= 0) {
            setMessage('Please enter a valid amount.');
            return;
        }
        if (amount > points) {
            setMessage('Insufficient Points. At least 1000 points');
            return;
        }
        if (points < withdrawalThreshold) {
            setMessage(`You need a minimum of ${withdrawalThreshold} points to withdraw.`);
            return;
        }

        // Notify admin with user-specific information
        setMessage(`Withdrawal request from ${username} (User ID: ${userId}) for ${amount} points submitted. Payment pending...`);

        // Reset the input field
        setWithdrawAmount('');
    };

    return (
        <div>
            <Navbar />
            <div className="min-h-screen flex items-center justify-center">
                <div className="w-full max-w-lg bg-white p-8 shadow-lg rounded-lg">
                    <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">Earn Rewards</h1>
                    <p className="text-xl text-gray-600 text-center mb-8">Total Points: <span className="font-semibold text-gray-800">{points}</span></p>

                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-semibold text-gray-800">Withdraw Points</h2>
                        <p className="text-gray-600">You have <span className="font-semibold">{points}</span> points available to withdraw.</p>
                    </div>

                    <div className="mb-6">
                        <input
                            type="number"
                            value={withdrawAmount}
                            onChange={(e) => setWithdrawAmount(e.target.value)}
                            placeholder="Enter amount to withdraw"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    <button
                        onClick={handleWithdraw}
                        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-300"
                    >
                        Confirm Withdrawal
                    </button>

                    {message && (
                        <p className={`mt-6 text-center ${message.includes('submitted') ? 'text-green-500' : 'text-red-500'}`}>
                            {message}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Earnings;
