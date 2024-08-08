import React from "react";
import styles from './index.module.css'
import Item1 from '../../../asset/Item.png'
import Item2 from '../../../asset/Item (1).png'
import Item3 from '../../../asset/Item (2).png'
import Item4 from '../../../asset/Item (3).png'
import Item5 from '../../../asset/Item (4).png'
import Item6 from '../../../asset/Item (5).png'
import Item7 from '../../../asset/Item (6).png'
import Item8 from '../../../asset/Item (7).png'
import Item9 from '../../../asset/Item (8).png'

const Section4 = () => {
    return (
        <div className={styles.type}>
            <p className={styles.select}>SELECT THE TYPE OF E-WASTE</p>
            <div className={styles.images}>
                <img src={Item1} alt="Item1" className="Item1"/>
                <img src={Item2} alt="Item2" className="Item2"/>
                <img src={Item3} alt="Item3" className="Item3"/>
            </div>
            <div className={styles.images1}>
                <img src={Item4} alt="Item4" className="Item4"/>
                <img src={Item5} alt="Item5" className="Item5"/>
                <img src={Item6} alt="Item6" className="Item6"/>
            </div>
            <div className={styles.images2}>
                <img src={Item7} alt="Item7" className="Item7"/>
                <img src={Item8} alt="Item8" className="Item8"/>
                <img src={Item9} alt="Item9" className="Item9"/>
                <p className={styles.scan}>SCAN OR UPLOAD YOUR E-WASTE</p>
            </div>
        </div>
    );
};

export default Section4;
