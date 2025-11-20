import { useParams, useOutletContext } from "react-router";

export default function BrandPage() {
  const { bname } = useParams();
  const { products, updateCart } = useOutletContext();
  const specificBrandProducts = products.filter((obj) => obj.brand === bname);

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
              onChange={(e) => updateCart(item, e.target.value)}
            ></input>
            <p>to bag</p>
          </div>
        </div>
      ))}
    </div>
  );
}
