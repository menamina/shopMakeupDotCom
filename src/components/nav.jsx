import Cake from "../imgs/cake.png";
import Login from "../imgs/profile.svg";
import Bag from "../imgs/shoppingBag.svg";
import { Link } from "react-router";

export default function Navi({
  byBrand,
  byCategory,
  byCleanBeauty,
  menuState,
  isOpen,
  cartTotal,
}) {
  return (
    <nav className="naviHolder">
      <div className="preShop">
        <div>
          <p>Free shipping on all orders!</p>
        </div>
        <div>
          <p className="">Track an Order</p>
          <p className="">Gift Cards</p>
        </div>
      </div>
      <div className="navi">
        <div className="lNavi">
          <div className="logoNav">
            <img
              src={Cake}
              alt="white cake with strawberrys on top - brand logo"
            ></img>
            <p>Cakeface.</p>
          </div>
          <div>
            <p className="shopCategories" onClick={() => menuState("brands")}>
              Brands
            </p>
            <div
              className={`dropdownBrands ${
                isOpen === "brands" ? "show" : "hide"
              }`}
            >
              {byBrand.map((brand) => (
                <Link to={`/Brand/${brand}`} className="dropdownItem">
                  {brand}
                </Link>
              ))}
            </div>

            <p className="shopCategories" onClick={() => menuState("category")}>
              Category
            </p>
            <div
              className={`dropdownCategory ${
                isOpen === "category" ? "show" : "hide"
              }`}
            >
              {byCategory.map((category) => (
                <Link to={`/Category/${category}`} className="dropdownItem">
                  {category}
                </Link>
              ))}
            </div>
            <p
              className="shopCategories"
              onClick={() => menuState("clean beauty")}
            >
              Clean Beauty
            </p>
            <div
              className={`dropdownClean ${
                isOpen === "clean beauty" ? "show" : "hide"
              }`}
            >
              {byCleanBeauty.map((tag) => (
                <Link to={`/CleanBeautyTags/${tag}`} className="dropdownItem">
                  {tag}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="rNavi">
          <img src={Login} alt="login icon"></img>
          <div className="cartHolder">
            <div>{cartTotal === 0 ? "" : cartTotal}</div>
            <img src={Bag} alt="shopping cart icon"></img>
          </div>
        </div>
      </div>
    </nav>
  );
}
