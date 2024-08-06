import Tress from './../../asset/Column.png'
import React from "react";
import styles from './index.module.css'

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.Tress}>
                <img src={Tress} alt="Tress" className="Tress"/>
                <div className={styles.options}>
                    <p>Contact</p>
                    <p>Careers</p>
                    <p>Benefits</p>
                    <p>Notice Board</p>
                    <p>Explore</p>
                    <p>Trails</p>
                </div>
                <div className={styles.options1}>
                    <p>Company</p>
                    <p>About</p>
                    <p>Jobs</p>
                </div>
            </div>

        </div>
    )


}
export default Footer