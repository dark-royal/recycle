import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import {EyeIcon, EyeSlashIcon} from "@heroicons/react/24/solid";
import Navbar from "../../Components/Navbar";
import { signupApi } from "../../api";

const SignUp = () => {
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const initialValues = {
        username: '',
        phoneNumber: '',
        email: '',
        password: '',
    };

    const validationSchema = Yup.object({
        username: Yup.string().required('Username is required'),
        phoneNumber: Yup.string().required('Phone number is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string().required('Password is required'),
    });

    const handleSubmit = async (values) => {
        setLoading(true);
        setSuccessMessage('');
        setErrorMessage('');

        try {
            console.log("OLODO DAYO")
            const response = await signupApi(values);
            console.log("OLODO MICHEAL")

            const successMessage = response.data?.message || 'Registration successful!';
            setSuccessMessage(successMessage);

            console.log('Response data:', response.data);

            localStorage.setItem('userId', response.data.user_id);
            localStorage.setItem('username', response.data.username);

            setTimeout(() => {
                navigate('/login');
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

    // Automatically clear the success and error messages after 3 seconds
    useEffect(() => {
        if (successMessage || errorMessage) {
            const timer = setTimeout(() => {
                setSuccessMessage('');
                setErrorMessage('');
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [successMessage, errorMessage]);

    return (
        <div>
            <Navbar />
            {/* Container for messages */}
            <div className="fixed top-14 right-5 m-10 p-3 h-[100%] z-50">
                {successMessage && (
                    <div className="bg-customWhite text-lg text-green-500 p-3 h-20 rounded-xl shadow-md">
                        {successMessage}
                    </div>
                )}
                {errorMessage && (
                    <div className="bg-white text-xl text-red-600 p-5 h-20 rounded-xl shadow-md">
                        {errorMessage}
                    </div>
                )}
            </div>
            <div className="flex items-center justify-center min-h-screen bg-customGreen">
                <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 w-[90%] sm:w-[70%] md:w-[50%] lg:w-[30%]">
                    <h2 className="text-2xl font-bold text-center mb-6">Create an account</h2>
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
                                    <ErrorMessage name="username" component="div" className="text-red-500 text-sm" />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                                    <Field
                                        name="phoneNumber"
                                        type="tel"
                                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                                    />
                                    <ErrorMessage name="phoneNumber" component="div" className="text-red-500 text-sm" />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Email</label>
                                    <Field
                                        name="email"
                                        type="email"
                                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                                    />
                                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
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
                                            className="absolute inset-y-0 right-0 flex bg-transparent p-0 -translate-y-1 hover:bg-transparent translate-x-[90%] items-center pr-3"
                                        >
                                            {showPassword ? (
                                                <EyeSlashIcon className="h-5 w-5 bg-transparent text-gray-500" />
                                            ) : (
                                                <EyeIcon className="h-5 w-5 text-gray-500" />
                                            )}
                                        </button>
                                        <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className={`w-full bg-green-500 text-white font-bold py-2 rounded-md ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-600'}`}
                                    disabled={loading}
                                >
                                    {loading ? 'Loading...' : 'Sign Up'}
                                </button>
                            </Form>
                        )}
                    </Formik>
                    <p className="mt-4 text-center text-sm text-gray-600">
                        Already have an account? <a href="/login" className="text-green-500">Sign in</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
