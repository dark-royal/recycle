// Example fetch call
import axios from "axios";

export const signupApi = async (userData) => {
    const response = await fetch('https://g-cycle-latest-1.onrender.com/api/v1/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'An error occurred');
    }

    return await response.json();
};
export const loginApi = async (loginData) => {
    try {
         // Replace with your actual login endpoint
        return await axios.post('https://g-cycle-latest-1.onrender.com/api/v1/auth/login', loginData);
    } catch (error) {
        throw error;
    }
};