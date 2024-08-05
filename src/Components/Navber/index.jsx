import styles from './index.module.css';
import logo1 from '../../asset/Vector (1).png';

const Navbar = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.sectionsWrapper}>
                <img src={logo1} alt="logo1" className={styles.logo} />
                <h1 className={styles.title}>E-Treasure Trove</h1>
                <div className={styles.section}>
                    <p>Home</p>
                    <p>Dashboard</p>
                    <p>About Us</p>
                </div>
                <div className={styles.section1}>
                    <p>LOCATE</p>
                    <p>PICKUP REQUEST</p>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
