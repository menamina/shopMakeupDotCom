import Cake from "../imgs/cake.png";
import Login from "../imgs/profile.svg";
import Bag from "../imgs/shoppingBag.svg";
import { Link } from "react-router";
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
      <div className={styles.preShop}>
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
            <img
              className={styles.cake}
              src={Cake}
              alt="white cake with strawberrys on top - brand logo"
            ></img>
            <p>Cakeface.</p>
          </div>
          <div className={styles.navLinks}>
            <p
              className={styles.shopCategories}
              onClick={() => menuState("brands")}
            >
              Brands
            </p>
            <div
              className={`${styles.dropdownBrands} ${
                isOpen === "brands" ? styles.show : styles.hidden
              }`}
            >
              {byBrand.map((brand) => (
                <Link
                  to={`/Brand/${brand}`}
                  className={styles.dropdownItem}
                  key={brand}
                >
                  {brand}
                </Link>
              ))}
            </div>

            <p
              className={styles.shopCategories}
              onClick={() => menuState("category")}
            >
              Category
            </p>
            <div
              className={`${styles.dropdownCategory} ${
                isOpen === "category" ? styles.show : styles.hidden
              }`}
            >
              {byCategory.map((category) => (
                <Link
                  to={`/Category/${category}`}
                  className={styles.category}
                  key={category}
                >
                  {category}
                </Link>
              ))}
            </div>
            <p
              className={styles.shopCategories}
              onClick={() => menuState("clean beauty")}
            >
              Clean Beauty
            </p>
            <div
              className={`${styles.dropdownClean} ${
                isOpen === "clean beauty" ? styles.show : styles.hidden
              }`}
            >
              {byCleanBeauty.map((tag) => (
                <Link
                  to={`/CleanBeautyTags/${tag}`}
                  className={styles.tag}
                  key={tag}
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.rNavi}>
          <img className={styles.login} src={Login} alt="login icon"></img>
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
    </nav>
  );
}
