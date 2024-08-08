// src/Signup.js
import React, { useState } from 'react';
import './index.module.css';

const Signup = () => {
    const [formData, setFormData] = useState({
        phoneNumber: '',
        fullName: '',
        dateOfBirth: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    return (
        <div className="signup-container">
            <h2>Create an account</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                />
                <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                />
                <div className="terms">
                    <input type="checkbox" required />
                    <label>I agree to the terms and conditions.</label>
                </div>
                <button type="submit">Sign Up</button>
            </form>
            <p>Already have an account? <a href="/login">Sign In</a></p>
        </div>
    );
};

export default Signup;