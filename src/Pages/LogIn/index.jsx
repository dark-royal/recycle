import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage as FormikErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/solid';
import Navbar from "../../Components/Navbar";
import { loginApi } from "../../api";

const SignIn = () => {
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const initialValues = {
        email: '',
        password: '',
    };

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string().required('Password is required'),
    });

    const handleSubmit = async (values) => {
        setLoading(true);
        setErrorMessage('');

        try {
            const response = await loginApi(values); // Call the login API with form values

            const successMessage = response.data?.message || 'Login successful!';
            console.log('Response data:', response.data); // Debugging to check the response data

            setTimeout(() => {
                navigate('/dashboard'); // Navigate to the dashboard or desired page after login
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

    // Automatically clear the error message after 3 seconds
    useEffect(() => {
        if (errorMessage) {
            const timer = setTimeout(() => {
                setErrorMessage('');
            }, 3000); // Clear the error message after 3 seconds

            return () => clearTimeout(timer); // Clear the timeout if component unmounts or if the errorMessage changes
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
                <div className="bg-white rounded-lg shadow-lg p-8 w-[30%]">
                    <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {() => (
                            <Form>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Email</label>
                                    <Field
                                        name="email"
                                        type="email"
                                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                                    />
                                    <FormikErrorMessage name="email" component="div" className="text-red-500 text-sm" />
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
                                                <EyeOffIcon className="h-5 w-5 bg-transparent text-gray-500" />
                                            ) : (
                                                <EyeIcon className="h-5 w-5 text-gray-500" />
                                            )}
                                        </button>
                                        <FormikErrorMessage name="password" component="div" className="text-red-500 text-sm" />
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
