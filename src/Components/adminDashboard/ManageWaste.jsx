import axios from "axios";
import React, { useState, useEffect } from "react";

const ManageWaste = () => {
    const [waste, setWaste] = useState([]);
    const [loadingWaste, setLoadingWaste] = useState(true);
    const [errorWaste, setErrorWaste] = useState(null);

    useEffect(() => {
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

        fetchWaste();

        // Optional cleanup function
        return () => {
            // Cleanup code if needed
        };
    }, []);

    const calculateTotalWaste = (wasteArray) => {
        return wasteArray.reduce((total, item) => {
            return total + (item.quantity || 0);
        }, 0);
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white p-6">
            <h3 className="text-lg font-bold mb-4">Manage Waste</h3>
            {loadingWaste ? (
                <p>Loading waste data...</p>
            ) : errorWaste ? (
                <p>{errorWaste}</p>
            ) : (
                <div>
                    {waste.length > 0 ? (
                        <table className="w-full text-left border-collapse">
                            <thead>
                            <tr>
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
                            <tr>
                                <td className="p-2 border-t font-bold" colSpan="2">Total Quantity</td>
                                <td className="p-2 border-t font-bold">{calculateTotalWaste(waste)} kg</td>
                            </tr>
                            </tbody>
                        </table>
                    ) : (
                        <p>No waste data available</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default ManageWaste;
