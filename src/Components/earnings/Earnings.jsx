import React, { useState } from 'react';
import Navbar from "../Navbar";

const Earnings = () => {
    const [points, setPoints] = useState(1200);
    const [withdrawAmount, setWithdrawAmount] = useState('');
    const [message, setMessage] = useState('');
    const userId = 1; // Replace this with the actual method to get the current user's ID

    const handleWithdraw = async () => {
        const amount = parseInt(withdrawAmount, 10);
        if (!amount || amount <= 0) {
            setMessage('Please enter a valid amount');
            return;
        }
        if (amount > points) {
            setMessage('Insufficient Points');
            return;
        }

        try {
            const response = await fetch('/api/withdraw', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userId, amount })
            });

            const data = await response.json();

            if (response.ok) {
                setPoints(points - amount); // Update local points
                setMessage(`Withdrawal Successful! ${amount} points have been deducted from your balance.`);
            } else {
                setMessage(data.message || 'Withdrawal failed. Please try again.');
            }
        } catch (error) {
            setMessage('An error occurred. Please try again later.');
        }

        setWithdrawAmount('');
    };

    return (
        <div>
            <Navbar />
            <div className="max-w-md mx-auto mt-48 p-5 bg-white shadow-md rounded-lg">
                <h1 className="text-2xl font-bold mb-4">Earn Rewards</h1>
                <p className="text-lg">Total Points: <span className="font-semibold">{points}</span></p>
                <h2 className="mt-6 text-xl font-semibold">Withdraw Points</h2>
                <p className="mb-4">You have {points} points available to withdraw.</p>
                <div className="mb-4">
                    <input
                        type="number"
                        value={withdrawAmount}
                        onChange={(e) => setWithdrawAmount(e.target.value)}
                        placeholder="Enter amount to withdraw"
                        className="border border-gray-300 p-2 rounded w-full"
                    />
                </div>
                <button
                    onClick={handleWithdraw}
                    className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition"
                >
                    Confirm Withdrawal
                </button>
                {message && (
                    <p className={`mt-4 ${message.includes('Successful') ? 'text-green-500' : 'text-red-500'}`}>
                        {message}
                    </p>
                )}
            </div>
        </div>
    );
};

export default Earnings;