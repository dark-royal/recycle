import styles from './index.module.css';

const Section10 = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.content}>
                <p className={styles.text}>
                    <span className={styles.pickupTitle}>Pickup Request</span><br />
                    <span className={styles.boldText}>
                        If you have any questions, please don't hesitate to<br />
                        contact us. Please feel free to call us or contact by<br />
                        email.
                    </span>
                </p>
            </div>
        </div>
    );
}

export default Section10;
