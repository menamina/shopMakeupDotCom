import Cake from "../imgs/cake.png";
import Email from "../imgs/email.svg";
import Phone from "../imgs/phone.svg";
import styles from "../css/footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footerHolder}>
      <div className={styles.foot1}>
        <img className={styles.cake} src={Cake} alt="cake brand logo"></img>
        <div>
          <img className={styles.email} src={Email} alt="email logo"></img>
          <input
            type="email"
            aria-label="enter email here"
            placeholder="Enter your email"
          />
        </div>
        <div className={styles.emptyDiv}></div>
        <div>
          <img className={styles.phone} src={Phone} alt="phone logo"></img>
          <input
            type="email"
            aria-label="enter phone number here"
            placeholder="Enter phone number"
          />
        </div>
        <div className={styles.emptyDiv}></div>
      </div>
      <div className={styles.foot2}>
        <p className={styles.footerTitle}>COMPANY</p>
        <p>About</p>
        <p>Contact Us</p>
      </div>
      <div className={styles.foot3}>
        <p className={styles.footerTitle}>HELP</p>
        <p>FAQ</p>
        <p>Return Policy</p>
      </div>
      <div className={styles.foot4}>
        <p className={styles.footerTitle}>FOLLOW US</p>
        <div>
          <img></img>
          <p>Instagram</p>
        </div>
        <div>
          <img></img>
          <p>X</p>
        </div>
        <div>
          <img></img>
          <p>Youtube</p>
          <div>
            <img></img>
            <p>Tiktok</p>
          </div>
        </div>
      </div>
    </div>
  );
}
