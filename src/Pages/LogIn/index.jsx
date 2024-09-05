import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage as FormikErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import Navbar from "../../Components/Navbar";
import { loginApi } from "../../api";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

const SignIn = () => {
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    // Define credentials for both admin and agent roles
    const adminCredentials = {
        email: "admin@gmail.com",
        password: "michaeladmin",
    };

    const agentCredentials = {
        email: "agent@gmail.com",
        password: "agent123",
    };

    const initialValues = {
        username: '',
        password: '',
    };

    const validationSchema = Yup.object({
        username: Yup.string().required('Username is required'),
        password: Yup.string().required('Password is required'),
    });

    const handleSubmit = async (values) => {
        setLoading(true);
        setErrorMessage('');

        // Check if the user is an admin
        const isAdmin = values.username === adminCredentials.email && values.password === adminCredentials.password;
        if (isAdmin) {
            navigate('/adminDashboard');
            setLoading(false);
            return;
        }

        // Check if the user is an agent
        const isAgent = values.username === agentCredentials.email && values.password === agentCredentials.password;
        if (isAgent) {
            navigate('/agentDashboard');
            setLoading(false);
            return;
        }

        try {
            const response = await loginApi(values);

            const successMessage = response.data?.message || 'Login successful!';
            console.log('Response data:', response.data);

            // Store both tokens
            const { token, refreshToken } = response.data.data;

            localStorage.setItem('accessToken', token);
            localStorage.setItem('refreshToken', refreshToken);
            localStorage.setItem('username', values.username);

            setTimeout(() => {
                navigate('/dashboard');
            }, 2000);
        } catch (error) {
            if (error.response && error.response.data) {
                const backendMessage = error.response.data.message;
                setErrorMessage(backendMessage);
            } else {
                setErrorMessage('An unexpected error occurred. Please try again.');
            }
        } finally {
            setLoading(false);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    useEffect(() => {
        if (errorMessage) {
            const timer = setTimeout(() => {
                setErrorMessage('');
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [errorMessage]);

    return (
        <div>
            <Navbar />
            <div className="fixed top-14 right-5 m-10 p-5 h-[100%] z-50">
                {errorMessage && (
                    <div className="bg-white text-xl text-red-700 p-5 h-20 rounded-xl shadow-md">
                        {errorMessage}
                    </div>
                )}
            </div>
            <div className="flex items-center justify-center min-h-screen bg-customGreen">
                <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 fixed w-[90%] sm:w-[70%] md:w-[50%] lg:w-[30%]">
                    <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {() => (
                            <Form>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Username</label>
                                    <Field
                                        name="username"
                                        type="text"
                                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                                    />
                                    <FormikErrorMessage name="username" component="div" className="text-red-500 text-sm" />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Password</label>
                                    <div className="relative">
                                        <Field
                                            name="password"
                                            type={showPassword ? 'text' : 'password'}
                                            className="mt-1 block w-full border border-gray-300 rounded-md p-2 pr-10"
                                        />
                                        <button
                                            type="button"
                                            onClick={togglePasswordVisibility}
                                            style={{
                                                backgroundColor: 'transparent',
                                                padding: '1px',
                                                position: 'absolute',
                                                right: '0',
                                                top: '50%',
                                                transform: 'translateY(-90%)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                height: '20px',
                                                width: '20px',
                                                color: '#6B7280', // Tailwind's gray-500 color
                                                zIndex: 10, // Ensure the button is clickable and above other elements
                                            }}
                                            className="pr-3"
                                        >
                                            {showPassword ? (
                                                <EyeSlashIcon
                                                    style={{height: '20px', width: '20px', color: '#6B7280'}}
                                                />
                                            ) : (
                                                <EyeIcon style={{height: '20px', width: '20px', color: '#6B7280'}}/>
                                            )}
                                        </button>

                                        <FormikErrorMessage name="password" component="div"
                                                            className="text-red-500 text-sm"/>
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className={`w-full bg-green-500 text-white font-bold py-2 rounded-md ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-600'}`}
                                    disabled={loading}
                                >
                                    {loading ? 'Loading...' : 'Sign In'}
                                </button>
                            </Form>
                        )}
                    </Formik>
                    <p className="mt-4 text-center text-sm text-gray-600">
                        Don't have an account? <a href="/signup" className="text-green-500">Sign Up</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
