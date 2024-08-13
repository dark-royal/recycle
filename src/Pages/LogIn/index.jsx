import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { Icon } from '@iconify/react';
import loadingLoop from '@iconify/icons-line-md/loading-loop';
import Navbar from "../../Components/Navbar";

const LogIn = () => {
    const [isLoading, setIsLoading] = useState(false);

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email('Invalid email address')
            .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Must be a valid email address')
            .required('Email Address is required'),
        password: Yup.string()
            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 'Password must be at least 8 characters long.')
            .required('Password is required'),
    });

    const handleSubscribe = async (values, { resetForm }) => {
        setIsLoading(true);
        try {
            const payload = {
                email_address: values.email,
                status: 'LogIn',
                merge_fields: {
                    PASSWORD: values.password,
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
        <div>
            <Navbar />
            <div className="flex items-center ml-52 mt-32 bg-customGreen">
                <div className="bg-white shadow-md rounded-3xl p-8 w-96  h-[70%]">
                    <Formik
                        initialValues={{ email: '', password: '' }}
                        validationSchema={validationSchema}
                        onSubmit={handleSubscribe}
                    >
                        {({ values, errors, touched, handleChange, handleBlur }) => (
                            <Form className="space-y-4">
                                <div className="text-center">
                                    <p className="text-xl font-semibold">Glad to see you again!</p>
                                </div>
                                <div>
                                    <Field
                                        type="email"
                                        name="email"
                                        placeholder="Enter Email Address"
                                        className={`block w-full p-2 border rounded ${errors.email && touched.email ? 'border-red-500' : 'border-gray-300'}`}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                    />
                                    {errors.email && touched.email && (
                                        <div className="text-red-500 text-sm">{errors.email}</div>
                                    )}
                                </div>
                                <div>
                                    <Field
                                        type="password"
                                        name="password"
                                        placeholder="Enter Password"
                                        className={`block w-full p-2 border rounded ${errors.password && touched.password ? 'border-red-500' : 'border-gray-300'}`}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}
                                    />
                                    {errors.password && touched.password && (
                                        <div className="text-red-500 text-sm">{errors.password}</div>
                                    )}
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className={`w-full bg-ash text-black font-semibold py-2 rounded ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-customGreen'}`}
                                        disabled={isLoading}
                                    >
                                        {isLoading ? (
                                            <div className="flex items-center justify-center">
                                                <Icon width={24} height={24} icon={loadingLoop} />
                                            </div>
                                        ) : (
                                            'Sign In'
                                        )}
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default LogIn;