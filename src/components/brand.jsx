import { useParams, useOutletContext } from "react-router";

export default function Brand() {
  const { brand } = useParams();
  const { products } = useOutletContext();
  const specificBrandProducts = products.filter((obj) => obj.brand === brand);

  return (
    <div className="Brands">
      {specificBrandProducts.map((item) => (
        <div className="BrandHolder">
          <img
            src={item.image_link}
            alt={`${item.brand} ${item.category}`}
          ></img>
          <p>{item.brand}</p>
          <p>{item.name}</p>
          <p>${item.price}</p>
          <div>
            <p>Add</p>
            <input
              type="number"
              onChange={(e) => updateCart(e.target.value)}
            ></input>
            <p>to bag</p>
          </div>
        </div>
      ))}
    </div>
  );
}
