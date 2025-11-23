import { useParams, useOutletContext } from "react-router";
import styles from "../css/brand.module.css";

export default function TagsPage() {
  const { tname } = useParams();
  const { products, updateCart, menuState } = useOutletContext();

  const thisCatProducts = products.filter((item) => item.tag_list === tname);

  return (
    <div className={styles.archHolder} onClick={() => menuState(null)}>
      <div>
        <p className={styles.tagFont}>{`${tname
          .slice(0, 1)
          .toUpperCase()}${tname.slice(1)}`}</p>
      </div>
      <div className={styles.momTagHolder}>
        {thisCatProducts.map((item) => (
          <div className={styles.catholder} key={item.id}>
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
              <p>Add</p>
              <input
                type="number"
                onChange={(e) =>
                  updateCart(item.id, Number(e.target.value), item)
                }
                className={styles.tagINPUT}
              ></input>
              <p>to bag</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
