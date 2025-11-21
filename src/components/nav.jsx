import Cake from "../imgs/cake.png";
import Login from "../imgs/profile.svg";
import Bag from "../imgs/shoppingBag.svg";
import { Link } from "react-router-dom";
import styles from "../css/navi.module.css";

export default function Navi({
  byBrand,
  byCategory,
  byCleanBeauty,
  menuState,
  isOpen,
  cartTotal,
}) {
  return (
    <nav className={styles.naviHolder}>
      <div className={styles.preShop} onClick={() => menuState(null)}>
        <div>
          <p>Free shipping on all orders!</p>
        </div>
        <div className={styles.TrackGift}>
          <p className={styles.track}>Track an Order</p>
          <p className={styles.gift}>Gift Cards</p>
        </div>
      </div>

      <div className={styles.navi}>
        <div className={styles.lNavi}>
          <div className={styles.logoNav}>
            <Link to="/" onClick={() => menuState(null)}>
              <img
                className={styles.cake}
                src={Cake}
                alt="white cake with strawberrys on top - brand logo"
              ></img>
            </Link>
          </div>
          <div className={styles.navLinks}>
            <p
              className={styles.shopCategories}
              onClick={() => menuState("brands")}
            >
              Brands
            </p>

            <p
              className={styles.shopCategories}
              onClick={() => menuState("category")}
            >
              Category
            </p>

            <p
              className={styles.shopCategories}
              onClick={() => menuState("clean beauty")}
            >
              Clean Beauty
            </p>
          </div>
        </div>
        <div className={styles.rNavi}>
          <Link to="login">
            <img className={styles.login} src={Login} alt="login icon"></img>{" "}
          </Link>
          <Link to={`/Cart`} className="cart">
            <div className="cartHolder">
              <div>{cartTotal === 0 ? "" : cartTotal}</div>
              <img
                className={styles.bag}
                src={Bag}
                alt="shopping cart icon"
              ></img>
            </div>
          </Link>
        </div>
      </div>

      <div className={styles.displayNavClick}>
        {isOpen === "clean beauty" ? (
          <div className={`${styles.allNavsClicked} ${styles.show}`}>
            {byCleanBeauty.map((tag) => (
              <Link to={`/Tags/${tag}`} className={styles.tag} key={tag}>
                {tag}
              </Link>
            ))}
          </div>
        ) : null}

        {isOpen === "brands" ? (
          <div className={styles.allNavsClicked}>
            {byBrand.map((brand) => (
              <Link to={`/Brand/${brand}`} className={styles.brand} key={brand}>
                {brand}
              </Link>
            ))}
          </div>
        ) : null}

        {isOpen === "category" ? (
          <div className={styles.allNavsClicked}>
            {byCategory.map((cat) => (
              <Link to={`/Category/${cat}`} className={styles.cat} key={cat}>
                {cat}
              </Link>
            ))}
          </div>
        ) : null}
      </div>
    </nav>
  );
}
