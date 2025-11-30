import { useState, useEffect } from "react";
import styles from "../css/lgoin.module.css";
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
          <label htmlFor="email">Email address*</label>
          <input type="email" required />
          <label htmlFor="password">Password*</label>
          <input type="text" required />
        </form>
      </div>
    </div>
  );
}
