import Cake from "./cake.png";
import Login from "./profile.svg";
import Bag from "./shoppingBag.svg";


export function Navi(itemClick, updateItemClick, updateHomePage) {
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
            <p className="shopCategories">Brands</p>
            <p className="shopCategories">Category</p>
            <p className="shopCategories">Clean Beauty</p>
          </div>
        </div>
        <div className="rNavi">
          <img src={Login} alt="login icon"></img>
          <img src={Bag} alt="shopping cart icon"></img>
        </div>
      </div>
    </nav>
  );
}
