import styles from './index.module.css'
const Section2 = () => {
    return (
        <div className={styles.keysContainer}>
            <div className={styles.key}>
                <p className={styles.reduce}>Reduce</p>
                <p>A key part of waste "reduction" is<br />
                    "conservation"—using natural resources<br />
                    wisely, and using less than usual in order<br />
                    avoid waste.</p>
            </div>
            <div className={styles.key1}>
                <p className={styles.highlight}>Reuse</p>
                <p>You can "reuse" materials in their original<br />
                    form instead of throwing them away, or pass<br />
                    those materials on to others who could use them too<br />
                    </p>
            </div>
            <div className={styles.key2}>
                <p className={styles.recycle}>Recycle</p>
                <p>Your recycling mission is not impossible! In<br />
                    fact, it is very simple: Don't throw away<br />
                    anything that can be recycled!</p>
            </div>
        </div>
    )
}

export default Section2;