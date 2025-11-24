import { useParams, useOutletContext } from "react-router";
import styles from "../css/tags.module.css";

export default function TagsPage() {
  const { tname } = useParams();
  const { products, updateCart, setMenuOpenClose, cartItems } =
    useOutletContext();

  const thisTagProducts = products.filter((item) =>
    item.tag_list.includes(tname)
  );

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
    <div className={styles.archHolder} onClick={() => setMenuOpenClose(null)}>
      <div>
        <p className={styles.tagFont}>{`${tname
          .slice(0, 1)
          .toUpperCase()}${tname.slice(1)}`}</p>
      </div>
      <div className={styles.momTagHolder}>
        {thisTagProducts.map((item) => (
          <div className={styles.tagholder} key={item.id}>
            <div className={styles.imageHold}>
              <img
                className={styles.IMG}
                src={item.image_link}
                alt={`${item.brand} ${item.category}`}
              ></img>
            </div>
            <p>{`${tname.slice(0, 1).toUpperCase()}${tname.slice(1)}`}</p>
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
              <input
                type="number"
                onChange={(e) => updateCart(item.id, Number(e.target.value))}
                className={styles.tagINPUT}
                defaultValue={thisItemsQnty(item)}
              ></input>
              <p>in bag</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
