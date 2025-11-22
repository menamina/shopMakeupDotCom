import { useParams, useOutletContext } from "react-router";
import styles from "../css/brand.module.css";

export default function BrandPage() {
  const { bname } = useParams();
  const { products, updateCart } = useOutletContext();

  const thisBrandsProducts = products.filter((item) => item.brand === bname);

  return (
    <div className={styles.archHolder}>
      <div>
        <p className={styles.brandFont}>{`${bname
          .slice(0, 1)
          .toUpperCase()}${bname.slice(1)}`}</p>
      </div>
      <div className={styles.momBrandHolder}>
        {thisBrandsProducts.map((item) => (
          <div className={styles.brandHolder} key={item.id}>
            <div className={styles.imageHold}>
              <img
                className={styles.IMG}
                src={item.image_link}
                alt={`${item.brand} ${item.category}`}
              ></img>
            </div>
            <p>{`${bname.slice(0, 1).toUpperCase()}${bname.slice(1)}`}</p>
            <p>{`${item.name.slice(0, 1).toUpperCase()}${item.name.slice(
              1
            )}`}</p>
            {item.product_colors.length === 1 ? null : (
              <p className={styles.colorLength}>
                {item.product_colors.length} colors
              </p>
            )}
            <p>${item.price}</p>
            <div className={styles.inputDiv}>
              <p>Add</p>
              <input
                type="number"
                onChange={(e) =>
                  updateCart(item.id, Number(e.target.value), item.price)
                }
                className={styles.brandINPUT}
              ></input>
              <p>to bag</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
