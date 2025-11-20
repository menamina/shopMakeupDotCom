import { useParams, useOutletContext } from "react-router";
import { useOutletContext } from "react-router-dom";

export default function Brand() {
  const { brand } = useParams();
  const { products, cartTotal, updateCartTotal } = useOutletContext();
  const specificBrandProducts = products.filter((obj) => obj.brand === brand);

  return (
    <div className="Brands">
      {specificBrandProducts.map((item) => (
        <div className="BrandHolder">
          <img src={item.image_link} alt={`${item.brand} ${item.category}`}></img>
          <p>{item.brand}</p>
          <p>{item.name}</p>
          <p>${item.price}</p>
          <button onClick={() =>}>Add to cart</button>
        </div>
      ))}
    </div>
  );
}
