import { Link } from "react-router-dom";
import { useOutletContext } from "react-router";
import styles from "../css/signUp.module.css";
import Cake from "../imgs/cake.png";

export default function SignUp() {
  const { updateSignUp } = useOutletContext();
  return (
    <div className={StyleSheet.signUpContainer}>
      <div>
        <img
          src={Cake}
          className={styles.cakeLogo}
          alt="brand logo - cake"
        ></img>
      </div>
      <div>
        <div>Create and account</div>
        <div>
          Join our loyalty program to earn points, redeem rewards, and more for
          free!
        </div>
      </div>
      <form>
        <p>* Indicates a required field</p>
        <div>
          <div>
            <label htmlFor="email">First name*</label>
            <input type="email" required />
          </div>
          <div>
            <label htmlFor="password">Last name*</label>
            <input type="text" required />
          </div>
          <label htmlFor="email">Email address*</label>
          <input type="email" required />
        </div>
        <div>
          <label htmlFor="password">Password*</label>
          <input type="text" required />
        </div>
        <Link to="/" onClick={() => updateSignUp(false)}>
          <button className={styles.signIn}>Create account</button>
        </Link>
      </form>
    </div>
  );
}
