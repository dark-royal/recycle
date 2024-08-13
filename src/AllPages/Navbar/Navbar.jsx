import React, { useState } from 'react';
import styles from './index.module.css';
import logo1 from '../../Components/asset/Preview-removebg-preview.png';
import {Link} from "react-router-dom";

const Navb = () => {
    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    return (
        <div className={styles.mainContainer}>
            <div className={`${styles.sectionsWrapper} ${menuActive ? styles.menuActive : ''}`}>
                <img src={logo1} alt="logo1" className={styles.logo} />
                <h1 className={styles.title}>g-Cycle</h1>
                <div className={styles.hamburger} onClick={toggleMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={styles.section}>
                    <Link to="/home">
                        <p>Home</p>
                    </Link>
                    <Link to="/dashboard">
                        <p>Dashboard</p>
                    </Link>
                    <Link to="/about">
                        <p>About Us</p>
                    </Link>
                </div>
                <div className={styles.section1}>
                    <Link to="/size">
                        <p>LOCATE</p>
                    </Link>
                    <Link to="/pickup">
                        <p>PICKUP REQUEST</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navb;
