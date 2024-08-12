import React from 'react';
import styles from './Section1.css'

import logo3 from './../../../Components/asset/trash.jpg'
import logo4 from './../../../Components/asset/image 12.png'
import logo5 from './../../../Components/asset/man.jpg'



const Section1 = () => {
    return (
        <div className={styles.logos}>
            <p>Give E-Waste To Us<br/> And Take Money Back</p>
            <img src={logo3} alt="Logo3" className={styles.logo3}/>
            <img src={logo4} alt="Logo4" className={styles.logo4}/>
            <img src={logo5} alt="Logo5" className={styles.logo5}/>

        </div>
    );
}

export default Section1;
