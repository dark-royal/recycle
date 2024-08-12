import styles from './Section8.css';
import React from "react";
import wat from './../../../asset/Frame 29.png';
import map from './../../../asset/image 13.png';

const Section8 = () => {
    return (
        <div className={styles.mainCon}>
            <div className={styles.phone}>
                <img src={wat} alt="wat" className={styles.wat} />
            </div>
            <div className={styles.maps}>
                <img src={map} alt="map" className={styles.map} />
                <div className={styles.text}>
                    <p className={styles.hunter}>G-CYCLE Hunter</p>
                    <p className={styles.help}>HELP US LOCATE THE E-WASTE IN YOUR NEIGHBOURHOOD AND EARN CASH REWARDS</p>
                    <p className={styles.become}>BECOME G-CYCLE HUNTER</p>
                </div>
                <div className={styles.local}>
                    <p>BECOME G-CYCLE HUNTER</p>
                    <p>HUNT G-CYCLE IN YOUR LOCALITY AND EARN MONEY</p>
                </div>
            </div>
        </div>
    );
}

export default Section8;
