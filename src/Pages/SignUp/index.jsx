import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline';
import Navbar from "../../Components/Navbar"; // Adjust import as needed

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    const initialValues = {
        username: '',
        phoneNumber: '',
        email: '',
        password: '',
    };

    const validationSchema = Yup.object({
        username: Yup.string()
            .required('Required'),
        phoneNumber: Yup.string().matches()
            .required('Required'),
        email: Yup.string().email('Invalid email format')
            .required('Required'),
        password: Yup.string().min(8, 'Password must be at least 8 characters long')
            .matches()
            .required('Required'),
    });

    const handleSubmit = async (values) => {
        setLoading(true);
        try {
            const response = await axios.post('http://localhost:8080/api/v1/auth/register', values);
            console.log(response.data);
            if (response.status === 200) {
                navigate('/dashboard');
            }
        } catch (error) {
            console.error(error.response.data);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <Navbar/>
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
                                <button
                                    type="submit"
                                    className={`w-full bg-green-500 text-white font-bold py-2 rounded-md ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-600'}`}
                                    disabled={loading}
                                >
                                    {loading ? 'Loading...' : 'Sign Up'} {}
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