import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import style from './index.module.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { Icon } from '@iconify/react';
import loadingLoop from '@iconify/icons-line-md/loading-loop';
import shape from './assert/Rectangle 5 (1).png';
import shape1 from './assert/Rectangle 6.png';
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
            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 'Password must be at least 8 characters long, include one uppercase letter, one lowercase letter, one number, and one special character')
            .required('Password is required'),
        phoneNumber: Yup.string()
            .matches(/^(\+?\d{1,3})?[-.\s]?(\(?\d{1,4}?\)?[-.\s]?)?(\d{1,4}[-.\s]?){1,3}\d{1,4}$/, 'Must be a valid phone number')
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
        <div>
            <Navbar/>

        <div className={style.mainContainer}>
            <img src={shape} alt="shape" className={style.shape}/>
            <img src={shape1} alt="shape1" className={style.shape1}/>
            <Formik
                initialValues={{username: '', email: '', password: '', phoneNumber: ''}}
                validationSchema={validationSchema}
                onSubmit={handleSubscribe}
            >
                {({values, errors, touched, handleChange, handleBlur}) => (
                    <Form className={style.formOverlay}>
                        <div className={style.subCont}>
                            <div className={style.innerCont}>
                                <div className={style.contentCont}>
                                    <div className={style.contentSection}>
                                        <p className={style.topic}>Create an Account</p>
                                    </div>
                                </div>
                                <div className={style.inputSection}>
                                    <div>
                                        <Field
                                            type="text"
                                            name="username"
                                            placeholder="Enter username"
                                            value={values.username}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={errors.username && touched.username ? style.errorInput : ''}
                                        />
                                        {errors.username && touched.username &&
                                            <div className={style.error}>{errors.username}</div>}
                                    </div>
                                    <div>
                                        <Field
                                            type="email"
                                            name="email"
                                            placeholder="Enter Email Address"
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={errors.email && touched.email ? style.errorInput : ''}
                                        />
                                        {errors.email && touched.email &&
                                            <div className={style.error}>{errors.email}</div>}
                                    </div>
                                    <div>
                                        <Field
                                            type="password"
                                            name="password"
                                            placeholder="Enter password"
                                            value={values.password}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={errors.password && touched.password ? style.errorInput : ''}
                                        />
                                        {errors.password && touched.password &&
                                            <div className={style.error}>{errors.password}</div>}
                                    </div>
                                    <div>
                                        <Field
                                            type="text"
                                            name="phoneNumber"
                                            placeholder="Enter phone number"
                                            value={values.phoneNumber}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={errors.phoneNumber && touched.phoneNumber ? style.errorInput : ''}
                                        />
                                        {errors.phoneNumber && touched.phoneNumber &&
                                            <div className={style.error}>{errors.phoneNumber}</div>}
                                    </div>
                                    <div className={style.btn}>
                                        <button type="submit" className={style.btn} disabled={isLoading}>
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
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
            <ToastContainer/>
        </div>
        </div>
    );
};

export default SignUp;
