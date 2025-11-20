import { useParams, useOutletContext } from "react-router";
import { useOutletContext } from "react-router-dom";

export default function Brand() {
  const { name } = useParams();
  const { products } = useOutletContext();
  return <div className="Brands"></div>;
}
