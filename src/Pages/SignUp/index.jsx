import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { Icon } from '@iconify/react';
import loadingLoop from '@iconify/icons-line-md/loading-loop';
import Navbar from "../../Components/Navbar";

const SignUp = () => {
    const [isLoading, setIsLoading] = useState(false);

    const validationSchema = Yup.object().shape({
        username: Yup.string()
            .matches(/^[a-zA-Z\s]+$/, 'Name should only contain letters and spaces')
            .required('Username is required'),
        email: Yup.string()
            .email('Invalid email address')
            .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Must be a valid email address')
            .required('Email Address is required'),
        password: Yup.string()
            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                'Password must be at least 8 characters long, include one uppercase letter, one lowercase letter, one number, and one special character')
            .required('Password is required'),
        phoneNumber: Yup.string()
            .matches(/^(\+?\d{1,3})?[-.\s]?(\(?\d{1,4}?\)?[-.\s]?)?(\d{1,4}[-.\s]?){1,3}\d{1,4}$/,
                'Must be a valid phone number')
            .required('Phone Number is required')
    });

    const handleSubscribe = async (values, { resetForm }) => {
        setIsLoading(true);
        try {
            const payload = {
                email_address: values.email,
                status: 'SignUp',
                merge_fields: {
                    USERNAME: values.username,
                },
            };
            const response = await axios.post("", payload);

            if (response.data.success) {
                toast.success(`Hi ${values.username}, You are now a citizen`, {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                resetForm();
            } else {
                toast.error('Subscription failed. Please try again', {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        } catch (error) {
            console.error('Error during subscription:', error);
            toast.error('Subscription failed. Please try again', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar/>
            <div className="flex items-center ml-48 flex-grow">
                <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-6 text-center">Create an Account</h2>
                    <Formik
                        initialValues={{username: '', email: '', password: '', phoneNumber: ''}}
                        validationSchema={validationSchema}
                        onSubmit={handleSubscribe}
                    >
                        {({values, errors, touched, handleChange, handleBlur}) => (
                            <Form>
                                <div className="flex flex-col space-y-4">
                                    <div>
                                        <Field
                                            type="text"
                                            name="username"
                                            placeholder="Enter username"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={`block w-full px-4 py-2 border rounded-lg ${errors.username && touched.username ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                        />
                                        {errors.username && touched.username &&
                                            <div className="text-red-500 text-sm mt-1">{errors.username}</div>}
                                    </div>

                                    <div>
                                        <Field
                                            type="email"
                                            name="email"
                                            placeholder="Enter Email Address"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={`block w-full px-4 py-2 border rounded-lg ${errors.email && touched.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                        />
                                        {errors.email && touched.email &&
                                            <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
                                    </div>

                                    <div>
                                        <Field
                                            type="password"
                                            name="password"
                                            placeholder="Enter password"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={`block w-full px-4 py-2 border rounded-lg ${errors.password && touched.password ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                        />
                                        {errors.password && touched.password &&
                                            <div className="text-red-500 text-sm mt-1">{errors.password}</div>}
                                    </div>

                                    <div>
                                        <Field
                                            type="text"
                                            name="phoneNumber"
                                            placeholder="Enter phone number"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={`block w-full px-4 py-2 border rounded-lg ${errors.phoneNumber && touched.phoneNumber ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                        />
                                        {errors.phoneNumber && touched.phoneNumber &&
                                            <div className="text-red-500 text-sm mt-1">{errors.phoneNumber}</div>}
                                    </div>

                                    <div>
                                        <button type="submit"
                                                className="w-full py-2 bg-blue-500 text-white rounded-lg focus:outline-none hover:bg-blue-600"
                                                disabled={isLoading}>
                                            {isLoading ? (
                                                <div className="flex items-center justify-center">
                                                    <Icon width={24} height={24} icon={loadingLoop}/>
                                                </div>
                                            ) : (
                                                'Sign Up'
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>
                    <ToastContainer/>
                </div>
            </div>
        </div>
    );
};

export default SignUp;