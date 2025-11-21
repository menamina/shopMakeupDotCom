import { useParams, useOutletContext } from "react-router";

function clean(thisThing) {
  if (!thisThing) return "";
  const cleaned = thisThing
    .trim()
    .toLowerCase()
    .replaceAll("_", "")
    .replaceAll(" ", "");
  return cleaned;
}

export default function BrandPage() {
  const { bname } = useParams();
  const { products, updateCart } = useOutletContext();
  const specificBrandProducts = products.filter(
    (obj) => clean(obj.brand) === clean(bname)
  );

  return (
    <div>
      {specificBrandProducts.map((item) => (
        <div className="BrandHolder" key={item.id}>
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
