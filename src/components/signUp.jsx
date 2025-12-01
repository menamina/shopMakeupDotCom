import { Link } from "react-router-dom";
import styles from "../css/signUp.module.css";
import Cake from "../imgs/cake.png";

export default function SignUp({ updateSignUp }) {
  return (
    <div className={styles.signUpContainer}>
      <div>
        <img
          src={Cake}
          className={styles.cakeLogo}
          alt="brand logo - cake"
        ></img>
      </div>
      <div className={styles.signUpBlurb}>
        <div className={styles.create}>Create and account</div>
        <div>
          Join our loyalty program to earn points, redeem rewards, and more for
          free!
        </div>
      </div>
      <form className={styles.signUpForm}>
        <p>* Indicates a required field</p>
        <div className={styles.formFlexColumn}>
          <label htmlFor="email">First name*</label>
          <input type="text" required className={styles.input} />
        </div>
        <div className={styles.formFlexColumn}>
          <label htmlFor="password">Last name*</label>
          <input type="text" required className={styles.input} />
        </div>
        <div className={styles.formFlexColumn}>
          <label htmlFor="email">Email address*</label>
          <input type="email" required className={styles.input} />
        </div>
        <div className={styles.formFlexColumn}>
          <label htmlFor="password">Password*</label>
          <input type="text" required className={styles.input} />
        </div>
        <button
          className={styles.createAccount}
          onClick={(e) => {
            e.preventDefault;
            updateSignUp(false);
          }}
        >
          Create account
        </button>
      </form>
    </div>
  );
}
