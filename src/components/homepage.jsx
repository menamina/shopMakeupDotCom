import styles from "../css/homepage.module.css";
import { useOutletContext } from "react-router-dom";

export default function HomePage() {
  const { setOpenMenu } = useOutletContext();

  return (
    <div onClick={() => setOpenMenu(null)}>
      <div className={styles.imgTainer}>
        <h3 className={styles.cakeFace}>Cakeface.</h3>
      </div>
      <div>
        <p>New + Featured</p>
      </div>
    </div>
  );
}
