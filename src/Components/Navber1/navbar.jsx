import React, { useState } from 'react';
import styles from './Navbar.css';
import logo1 from './../asset/Preview.png';

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
                    <p>Home</p>
                    <p>Dashboard</p>
                    <p>About Us</p>
                </div>
                <div className={styles.section1}>
                    <p>LOCATE</p>
                    <p>PICKUP REQUEST</p>
                </div>
            </div>
        </div>
    );
}

export default Navb;
