import { useParams, useOutletContext } from "react-router";
import styles from "../css/cart.module.css";
import truck from "../imgs/truck.jpg";

export default function Cart() {
  const { cartTotal, cartItems, updateCart, updateCartItems, products } =
    useOutletContext();

  function deleteItem(thisItem) {
    const updatedCartWithDelete = cartItems.filter(
      (item) => item.id !== thisItem.id
    );
    updateCartItems(updatedCartWithDelete);
  }
  const total = cartItems.reduce((sum, itemInCart) => {
    const product = products.find((item) => item.id === itemInCart.id);
    const price = Number(product?.price);
    if (!product || Number.isNaN(price)) return sum;
    return sum + price * itemInCart.qty;
  }, 0);

  return (
    <div className={styles.parent}>
      {cartItems.length === 0 ? (
        <div className={styles.emptyBag}>Your bag is empty :&#40;</div>
      ) : (
        <div className={styles.cartTainer}>
          <div className={styles.left}>
            <div>
              <img
                src={truck}
                alt="shipping truck"
                className={styles.truck}
              ></img>
              <div>
                <p className={styles.ship}>Shipping</p>
                {cartTotal === 1 ? (
                  <p>1 item to you</p>
                ) : (
                  <p>{cartTotal} items to you</p>
                )}
              </div>
            </div>
            {cartItems.map((cartItem) => {
              const product = products.find((item) => item.id === cartItem.id);
              if (!product) {
                return (
                  <div className={styles.cartItems} key={cartItem.id}>
                    <p>Item details loading...</p>
                  </div>
                );
              }
              return (
                <div className={styles.cartItems} key={cartItem.id}>
                  <div>
                    <img
                      src={product.image_link}
                      alt={`${product.brand} ${product.name}`}
                      className={styles.cartIMGS}
                    ></img>
                    <div>
                      <p>{product.brand}</p>
                      <p>{product.name}</p>
                    </div>
                  </div>
                  <div className={styles.addDelete}>
                    <label>Quantity</label>
                    <input
                      type="number"
                      onChange={(e) =>
                        updateCart(product.id, Number(e.target.value))
                      }
                      defaultValue={cartItem.qty}
                    ></input>
                    <p onClick={() => deleteItem(cartItem)}>Remove</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={styles.right}>
            <div className={styles.orderSum}>
              <p className={styles.sumTitle}>Order Summary</p>
              <div className={styles.orderSumChildren}>
                <p>Subtotal ({cartTotal} items)</p>
                <p></p>
              </div>
              <div className={styles.orderSumChildren}>
                <p>Shipping</p>
                <p>FREE</p>
              </div>
              <div className={styles.orderSumChildren}>
                <p>Estimated tax</p>
                <p>Calculated at checkout</p>
              </div>
              <div className={styles.orderSumChildren}>
                <p>Estimated Total</p>
                <p>${total.toFixed(2)}</p>
              </div>
            </div>
            <div className={styles.checkOut}>
              <button className={styles.btn}>Checkout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
