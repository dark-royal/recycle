import styles from './Section2.css'
import { keys } from './data'

const Section2 = () => {
    return (
        <div className={styles.keysContainer}>
            {keys.map(({ id, title, description, className, textClassName }) => (
                <div key={id} className={className}>
                    <p className={textClassName}>{title}</p>
                    <p>{description}</p>
                </div>
            ))}
        </div>
    );
}

export default Section2;