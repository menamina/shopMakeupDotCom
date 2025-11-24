import { useParams, useOutletContext } from "react-router";
import styles from "../css/brand.module.css";

export default function CategoryPage() {
  const { cname } = useParams();
  const { products, updateCart, cartItems } = useOutletContext();

  const thisCatProducts = products.filter((item) => item.category === cname);

  function thisItemsQnty(item) {
    const thisItemsId = item.id;
    const found = cartItems.find((item) => item.id === thisItemsId);
    if (found) {
      return found.qty;
    } else {
      return 0;
    }
  }

  return (
    <div className={styles.archHolder}>
      <div>
        <p className={styles.catFont}>{`${cname
          .slice(0, 1)
          .toUpperCase()}${cname.slice(1)}`}</p>
      </div>
      <div className={styles.momCatHolder}>
        {thisCatProducts.map((item) => (
          <div className={styles.catholder} key={item.id}>
            <div className={styles.imageHold}>
              <img
                className={styles.IMG}
                src={item.image_link}
                alt={`${item.brand} ${item.category}`}
              ></img>
            </div>
            <p>{`${cname.slice(0, 1).toUpperCase()}${cname.slice(1)}`}</p>
            <p>
              {`${item.name.slice(0, 1).toUpperCase()}${item.name.slice(1)}`}
            </p>
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
                onChange={(e) => updateCart(item.id, Number(e.target.value))}
                className={styles.catINPUT}
                defaultValue={thisItemsQnty(item)}
              ></input>
              <p>to bag</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
