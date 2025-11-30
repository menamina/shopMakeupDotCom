import { Link } from "react-router-dom";
import styles from "../css/login.module.css";
import Cake from "../imgs/cake.png";

export default function Login({ updateSignIn, updateSignUp }) {
  return (
    <div className={styles.loginContainer}>
      <div>
        <img
          src={Cake}
          alt="brand logo - cake"
          className={styles.brandLogo}
        ></img>
      </div>
      <div className={styles.loginForm}>
        <p>Sign in</p>
        <form>
          <div>
            <label htmlFor="email">Email address*</label>
            <input type="email" required />
          </div>
          <div>
            <label htmlFor="password">Password*</label>
            <input type="text" required />
          </div>

          <button
            className={styles.signIn}
            onClick={(e) => {
              e.preventDefault();
              updateSignIn((prev) => !prev);
            }}
          >
            Sign in
          </button>
        </form>

        <div>Don't have an account?</div>

        <button
          onClick={() => {
            updateSignIn((prev) => !prev);
            updateSignUp((prev) => !prev);
          }}
        >
          Sign up
        </button>
      </div>
    </div>
  );
}
