import styles from "../css/homepage.module.css";
import { useOutletContext } from "react-router-dom";

export default function HomePage() {
  const { setOpenMenu, products } = useOutletContext();
  const glossier = products.filter((item) => item.brand === "glossier");
  const only5 = glossier.slice(2, 5);
  const maybelliine = products.filter((item) => item.brand === "maybelline");
  const only4 = maybelliine.slice();

  return (
    <div onClick={() => setOpenMenu(null)}>
      <div className={styles.imgTainer}>
        <h3 className={styles.cakeFace}>Cakeface.</h3>
      </div>
      <div className={styles.featured}>
        <p>New + Featured</p>
        <div>
          {only5.map((item) => (
            <div key={item.id}>
              <img src={item.image_link} className={styles.IMGS}></img>
              <p>{item.brand}</p>
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
