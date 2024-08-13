import React, { useState } from 'react';
import Navbar from "../../Components/Navbar";

const SignIn = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle sign-in logic here
    };

    return (
        <div>
            <Navbar/>
        <div className="flex items-center justify-center min-h-screen bg-customGreen">
            <div className="bg-white rounded-lg shadow-lg p-8 w-[30%]">
                <h2 className="text-center text-2xl font-bold mb-6">Glad to see you again!</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1" htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-2"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium " htmlFor="password">Password</label>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                id="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md p</div>-2"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="text-black -translate-y-14 bg-transparent p-0 w-0 translate-x-[350px] hover:bg-transparent"
                            >
                                {showPassword ? 'Hide' : 'Show'}
                            </button>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-green-500 text-white font-bold py-2 rounded-md hover:bg-green-600"
                    >
                        Sign In
                    </button>
                </form>
                <p className="text-center mt-6">
                    Don't Have An Account? <a href="/signup" className="text-green-500">Sign Up</a>
                </p>
            </div>
        </div>
        </div>
    );
};

export default SignIn;