
import styles from './index.module.css'
import Facebook from './../../asset/Facebook.png'
import instagram from './../../asset/Instagram.png'
import Twitter from'./../../asset/Twitter.png'
import Linkedin from './../../asset/LinkedIn.png'
import Tress from './../../asset/Column.png'

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            {/*<hr className={styles.horizontalLine} />*/}
            <div className={styles.Tress}>
                <img src={Tress} alt="Tress" className="Tress"/>
                <div className={styles.options}>
                    <p>Contact</p>
                    <p>Careers</p>
                    <p>Benefits</p>
                    <p>Notice Board</p>
                    <p>Explore</p>
                    <p>Trails</p>
                </div>
                <div className={styles.options1}>
                    <p>Company</p>
                    <p>About</p>
                    <p>Jobs</p>
                </div>
            </div>
            <div className={styles.email}>Enter your Email</div>
            <div className={styles.feed}>FEEDBACK</div>
            <div className={styles.social}>
                <img src={Facebook} alt="facebook" className="facebook"/>
                <img src={instagram} alt="instagram" className="instagram"/>
                <img src={Twitter} alt="twitter" className="twitter"/>
                <img src={Linkedin} alt="linkedin" className="linkedin"/>
            </div>
        </div>
    )
}

export default Footer;

