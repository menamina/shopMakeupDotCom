import Cake from "../imgs/cake.png";
import Email from "../imgs/email.svg";
import Phone from "../imgs/phone.svg";
import Insta from "../imgs/insta.svg";
import Tiktok from "../imgs/tiktok.svg";
import X from "../imgs/x.svg";
import Youtube from "../imgs/youtube.svg";
import styles from "../css/footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footerHolder}>
      <div className={styles.foot1}>
        <img className={styles.cake} src={Cake} alt="cake brand logo"></img>
        <div className={styles.values}>
          <img className={styles.email} src={Email} alt="email logo"></img>
          <input
            type="email"
            aria-label="enter email here"
            placeholder="Enter your email"
            className={styles.input}
          />
        </div>
        <div className={styles.emptyDiv}></div>
        <div className={styles.values}>
          <img className={styles.phone} src={Phone} alt="phone logo"></img>
          <input
            type="email"
            aria-label="enter phone number here"
            placeholder="Enter phone number"
            className={styles.input}
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
          <img src={Insta} className={styles.socials}></img>
          <p>Instagram</p>
        </div>
        <div>
          <img src={X} className={styles.socials}></img>
          <p>X</p>
        </div>
        <div>
          <img src={Youtube} className={styles.socials}></img>
          <p>Youtube</p>
        </div>
        <div>
          <img src={Tiktok} className={styles.socials}></img>
          <p>Tiktok</p>
        </div>
      </div>
    </div>
  );
}
