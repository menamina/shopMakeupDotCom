import { useParams, useOutletContext } from "react-router";
export default function Cart() {
  const { cartTotal, updateCartTotal, cartItems, updateCartItems } =
    useOutletContext();
}
