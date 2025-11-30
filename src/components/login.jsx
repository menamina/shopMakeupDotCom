import { Link } from "react-router-dom";
import { useOutletContext } from "react-router";
import styles from "../css/login.module.css";
import Cake from "../imgs/cake.png";

export default function Login() {
  const { updateSignIn, updateSignUp } = useOutletContext();
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
          <Link to="/">
            <button
              className={styles.signIn}
              onClick={() => updateSignIn(false)}
            >
              Sign in
            </button>
          </Link>
        </form>

        <div>Don't have an account?</div>
        <Link
          to={`/SignUp`}
          onClick={(() => updateSignIn(false), updateSignUp(true))}
        >
          <div>Sign up</div>
        </Link>
      </div>
    </div>
  );
}
