import React, { useState } from 'react';
import Navbar from "../../Components/Navbar";

const InputField = ({ label, type, name, value, onChange, required, showPasswordToggle, toggleShowPassword }) => (
    <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor={name}>{label}</label>
        <div className="relative">
            <input
                type={type}
                name={name}
                id={name}
                value={value}
                onChange={onChange}
                className="w-full border border-gray-300 rounded-md p-2"
                required={required}
            />
            {/*{showPasswordToggle && (*/}
            {/*    <button*/}
            {/*        type="button"*/}
            {/*        onClick={toggleShowPassword}*/}
            {/*        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"*/}
            {/*    >*/}
            {/*        {type === 'text' ? 'Hide' : 'Show'}*/}
            {/*    </button>*/}
            {/*)}*/}
        </div>
    </div>
);

const SignUp = () => {
    const [formData, setFormData] = useState({
        phoneNumber: '',
        email: '',
        password: '',
        confirmPassword: '',
        termsAccepted: false,
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <div>
            <Navbar />
            <div className="flex items-center justify-center min-h-screen bg-customGreen">
                <div className="bg-white rounded-lg shadow-lg p-8 w-[30%]">
                    <h2 className="text-2xl font-bold text-center mb-6">Create an account</h2>
                    <form onSubmit={handleSubmit}>
                        <InputField
                            label="Phone Number"
                            type="tel"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            required
                        />
                        <InputField
                            label="Email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <InputField
                            label="Password"
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            showPasswordToggle
                            toggleShowPassword={() => setShowPassword(!showPassword)}
                        />
                        {/*<button*/}
                        {/*    type="button"*/}
                        {/*    onClick={() => setShowPassword(!showPassword)}*/}
                        {/*    className="text-black -translate-y-14 bg-transparent p-0 w-0 translate-x-[370px] hover:bg-transparent"*/}
                        {/*>*/}
                        {/*    {showPassword ? 'Hide' : 'Show'}*/}
                        {/*</button>*/}
                        <InputField
                            label="Confirm Password"
                            type={showConfirmPassword ? 'text' : 'password'}
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                            showPasswordToggle
                            toggleShowPassword={() => setShowConfirmPassword(!showConfirmPassword)}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="text-black -translate-y-16 bg-transparent p-0 w-0 translate-x-[370px] hover:bg-transparent"
                        >
                            {showPassword ? 'Hide' : 'Show'}
                        </button>
                        <button
                            type="submit"
                            className="w-full bg-green-500 mt-2 text-white font-bold py-2 rounded-md hover:bg-green-600"
                        >
                            Sign Up
                        </button>
                    </form>
                    <p className="text-center mt-4">
                        Already have an account? <a href="/login" className="text-green-500">Sign in</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;