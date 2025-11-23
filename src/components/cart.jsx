import { useParams, useOutletContext } from "react-router";
import styles from "../css/cart.module.css";
import truck from "../imgs/truck.jpg";

export default function Cart() {
  const { cartTotal, cartItems, updateCart, updateCartItems, updateCartTotal } =
    useOutletContext();

  function deleteItem(thisItem) {
    const updatedCartWithDelete = cartItems.filter(
      (item) => item.id !== thisItem.id
    );
    updateCartItems(updatedCartWithDelete);
    updateCartTotal((prev) => prev - thisItem.qty);
  }

  return (
    <div>
      {cartItems.length === 0 ? (
        <p>Your bag is empty</p>
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
            {cartItems.map((item) => (
              <div className={styles.cartItems}>
                <div>
                  <img
                    src={item.fullItem.image_link}
                    alt={`${item.fullItem.brand} ${item.fullItem.name}`}
                    className={styles.cartIMGS}
                  ></img>
                  <div>
                    <p>{item.fullItem.brand}</p>
                    <p>{item.fullItem.name}</p>
                  </div>
                </div>
                <div>
                  <input
                    type="number"
                    onChange={(e) =>
                      updateCart(item.id, Number(e.target.value), item)
                    }
                    placeholder={item.qty}
                  ></input>
                  <p onClick={() => deleteItem(item)}>Remove</p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.right}>
            <div className={styles.orderSum}>
              <p>Order Summary</p>
              <div className={styles.orderSumChildren}>
                <p>Subtotal</p>
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
                <p>{cartTotal}</p>
              </div>
            </div>
            <div className={styles.checkOut}>
              <button>Checkout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// <div className={styles.Truck}>
//             <p>Bag</p>
//             {cartTotal === 1 ? <p>1 item</p> : <p>{cartTotal} items</p>}
//           </div>
