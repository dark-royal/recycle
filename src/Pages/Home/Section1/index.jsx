import React from 'react';
import styles from './index.module.css'
import logo2 from '../../../asset/rec.png'
import logo3 from '../../../asset/trash.jpg'
import logo4 from '../../../asset/image 12.png'


const Section1 = () => {
    return (
        <div className={styles.logos}>
            <p>Give E-Waste To Us<br/> And Take Money Back</p>
            <img src={logo2} alt="Logo2" className={styles.logo2} />
            <img src={logo3} alt="Logo3" className={styles.logo3} />
            <img src={logo4} alt="Logo4" className={styles.logo4} />
        </div>
    );
}

export default Section1;
