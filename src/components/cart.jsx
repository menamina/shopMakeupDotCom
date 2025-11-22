import { useParams, useOutletContext } from "react-router";
export default function Cart() {
  const { cartItems, updateCart } = useOutletContext();
}
