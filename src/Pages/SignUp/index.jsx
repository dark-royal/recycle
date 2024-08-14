import React, { useState, useEffect } from 'react';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/solid';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Navbar from "../../Components/Navbar";
import axios from "axios";

const SignUpForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [initialValues, setInitialValues] = useState({
        username: '',
        phone: '',
        email: '',
        password: '',
    });

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    // Fetch the initial values from the backend API
    const fetchInitialValues = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/v1/auth/register');
            const data = response.data;

            setInitialValues({
                username: data.username || '',
                phone: data.phoneNumber || '',
                email: data.email || '',
                password: '',
            });
        } catch (error) {
            console.error('Error fetching initial values:', error);
        }
    };

    useEffect(() => {
        fetchInitialValues();
    }, []);

    const validationSchema = Yup.object({
        username: Yup.string().required('Name is required'),
        phone: Yup.string().required('Phone number is required'),
        email: Yup.string().email('Invalid email format').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
        terms: Yup.bool().oneOf([true], 'You must accept the terms and conditions'),
    });

    const handleSubmit = async (values) => {
        try {
            const response = await axios.post('https://your-api-endpoint.com/api/register', values);
            console.log('Registration successful', response.data);
            // Handle success (e.g., redirect user or show a success message)
        } catch (error) {
            console.error('There was an error registering!', error);
        }
    };

    return (
        <div>
            <Navbar />
            <div className="flex items-center justify-center min-h-screen bg-customGreen">
                <div className="bg-white rounded-lg shadow-lg p-8 w-[30%]">
                    <h2 className="text-2xl font-bold text-center mb-6">Create an account</h2>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {() => (
                            <Form>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Name</label>
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
                                        name="phone"
                                        type="tel"
                                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                                    />
                                    <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />
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
                                                <EyeOffIcon className="h-5 w-5 bg-transparent text-gray-500" />
                                            ) : (
                                                <EyeIcon className="h-5 w-5 text-gray-500" />
                                            )}
                                        </button>
                                        <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <ErrorMessage name="terms" component="div" className="text-red-500 text-sm" />
                                    <label className="flex items-center">
                                        <Field type="checkbox" name="terms" className="mr-2" />
                                        I accept the terms and conditions
                                    </label>
                                </div>
                                <button type="submit" className="w-full bg-green-500 text-white font-bold py-2 rounded-md hover:bg-green-600">
                                    Sign Up
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

export default SignUpForm;