import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../css/login.module.css";
import Cake from "../imgs/cake.png";

export default function Login() {
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
            <button className={styles.signIn}>Sign in</button>
          </Link>
        </form>

        <div>Don't have an account?</div>
        <Link to={`/SignUp`}>
          <div>Sign up</div>
        </Link>
      </div>
    </div>
  );
}
