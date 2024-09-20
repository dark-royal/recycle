import React, {useEffect, useState} from "react";
import axios from "axios";

const ManageUser = () => {
    const [users, setUsers] = useState([]);
    const [loadingUsers, setLoadingUsers] = useState(true);
    const [errorUsers, setErrorUsers] = useState(null);

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
        fetchUsers();
    }, []);

    // Function to delete a user
    const deleteUser = async (userId) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            try {
                await axios.delete(`https://g-cycle-latest-1.onrender.com/api/v1/admin/deleteUser/${userId}`);
                setUsers(users.filter(user => user.userId !== userId)); // Update UI after deletion
            } catch (error) {
                console.error('Error deleting user:', error.response || error.message);
                alert('Error deleting user');
            }
        }
    };

    return (
        <div className="min-h-screen w-full flex flex-col bg-gray-900 text-white p-6">
            <h3 className="text-lg font-bold mb-4">Manage Users</h3>
            {loadingUsers ? (
                <p>Loading users...</p>
            ) : errorUsers ? (
                <p>{errorUsers}</p>
            ) : (
                <table className="w-full text-left border-collapse">
                    <thead>
                    <tr>
                        <th className="p-2 border-b border-gray-700">Name</th>
                        <th className="p-2 border-b border-gray-700">Email</th>
                        <th className="p-2 border-b border-gray-700">Phone Number</th>
                        <th className="p-2 border-b border-gray-700">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.length > 0 ? users.map(user => (
                        <tr key={user.userId}>
                            <td className="p-2 border-b border-gray-700">{user.username}</td>
                            <td className="p-2 border-b border-gray-700">{user.email}</td>
                            <td className="p-2 border-b border-gray-700">{user.phoneNumber || 'N/A'}</td>
                            <td className="p-2 border-b border-gray-700">
                                <button
                                    onClick={() => deleteUser(user.userId)}
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    )) : (
                        <tr>
                            <td className="p-2 text-center" colSpan="4">No users available</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default ManageUser;
