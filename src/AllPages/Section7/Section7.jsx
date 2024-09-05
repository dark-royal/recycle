import styles from './index.module.css'
import {Link} from "react-router-dom";
const Section7 = () => {
    return (
        <div className={styles.main}>
            <div className={styles.options}>
                <p className={styles.give}>CHOOSE HOW TO GIVE YOUR TRASH</p>
            </div>
            <div className={styles.pickup}>
                <Link to="/pickup">
                <p className={styles.door}>Door Step Or Pickup</p>
                    </Link>
                <p className={styles.plant}>Door At Plant</p>
            </div>
            <div className={styles.details}>
                <p className={styles.G}>YOUR G-CYCLE DETAILS</p>
            </div>
        </div>
    )
}

export default Section7;