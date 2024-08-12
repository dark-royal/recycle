import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import style from './index.module.css';
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
            <Navbar/>
        <div className={style.mainContainer}>
            <Formik
                initialValues={{ email: '', password: ''}}
                validationSchema={validationSchema}
                onSubmit={handleSubscribe}
            >
                {({values, errors, touched, handleChange, handleBlur}) => (
                    <Form className={style.formOverlay}>
                        <div className={style.subCont}>
                            <div className={style.innerCont}>
                                <div className={style.contentCont}>
                                    <div className={style.contentSection}>
                                        <p className={style.topic}>Glad to see you again!</p>
                                    </div>
                                </div>
                                <div className={style.inputSection}>
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
                                    <div className={style.btn}>
                                        <button type="submit" className={style.btn} disabled={isLoading}>
                                            {isLoading ? (
                                                <div className="flex items-center justify-center">
                                                    <Icon width={24} height={24} icon={loadingLoop}/>
                                                </div>
                                            ) : (
                                                'Sign In'
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

export default LogIn;
