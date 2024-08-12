import React from "react";
import logo10 from '../../asset/Frame 21.png'
import styles from './index.module.css'

const Section3 = () => {
    return (
        <div className={styles.quiz}>
            <p>Play quiz and earn points</p>
            <p>
                Q. Which rare and valuable metal is often found in small quantities in<br/>
                electronic devices and is a major driver of e-waste recycling efforts?<br/>
                <button className={styles.quizOption} data-answer="A">A</button>
                <span className={styles.quizText}>Silver</span><br/>
                <button className={styles.quizOption} data-answer="B">B</button>
                <span className={styles.quizText}>Platinum</span><br/>
                <button className={styles.quizOption} data-answer="C">C</button>
                <span className={styles.quizText}>Palladium</span><br/>
            </p>
            <div className={styles.quizImage}>
                <img src={logo10} alt="Quiz" className={styles.logo10}/>
            </div>
        </div>
    );

};

export default Section3;