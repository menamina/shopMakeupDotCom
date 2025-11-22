import { useState, useEffect } from "react";
import { Outlet } from "react-router";
import Navi from "./components/nav.jsx";
import Footer from "./components/footer.jsx";
import "./css/app.css";

export function noDupes(list) {
  const noDuplicate = [...new Set(list)];
  return noDuplicate;
}

export function noNull(list) {
  return list.filter((item) => item !== null && item !== "");
}

function App() {
  const brands = [
    "glossier",
    "e.l.f.",
    "maybelline",
    "milani",
    "l'oreal",
    "revlon",
    "pacifica",
    "burts bees",
    "smashbox",
  ].sort((a, b) => a.localeCompare(b));
  console.log(brands);

  const [products, updateProducts] = useState([]);
  const [categories, updateCategories] = useState([]);
  const [cleanBeauty, updateCleanBeauty] = useState([]);
  const [apiErr, updateApiErr] = useState("");

  const [cartTotal, updateCartTotal] = useState(0);
  const [cartItems, updateCartItems] = useState([]);
  const [openMenu, setOpenMenu] = useState(null);

  function updateCart(product, qty) {
    updateCartItems((prev) => [...prev, { item: product, quant: qty }]);
    // we want to loop through cart items take the quantity + to
    const total = cartItems.reduce((accum, next) => accum + next.quant, 0);
    updateCartTotal(total);
  }

  function setMenuOpenClose(name) {
    setOpenMenu((prev) => name);
  }

  function filterAllProductsByBrand(apireturn) {
    const noNull = apireturn.filter((item) => item.brand !== null || "");
    const cleanedNames = noNull.map((item) => ({
      ...item,
      brand: item.brand.toLowerCase().replaceAll("_", ""),
    }));
    const updated = cleanedNames.filter((item) => brands.includes(item.brand));
    updateProducts(updated);
  }

  useEffect(() => {
    async function makeupAPI() {
      try {
        const apiLink = await fetch(
          "http://makeup-api.herokuapp.com/api/v1/products.json"
        );
        const result = await apiLink.json();
        const categoryList = result.map((item) => item.category);
        const cleanedCategoryList = categoryList
          .filter(Boolean)
          .map((x) => x.trim())
          .map((x) => x.toLowerCase())
          .map((x) => x.replaceAll("_", " "));
        const finalCat = [
          ...new Set(cleanedCategoryList.sort((a, b) => a.localeCompare(b))),
        ];
        const tagList = noDupes(result.flatMap((item) => item.tag_list)).sort(
          (a, b) => a.localeCompare(b)
        );

        filterAllProductsByBrand(result);
        updateCategories(finalCat);
        updateCleanBeauty(tagList);
      } catch (error) {
        updateApiErr(error);
      }
    }
    makeupAPI();
  }, []);
  useEffect(() => {
    console.log("UPDATED: products", products, categories, cleanBeauty);
  }, [products, categories, cleanBeauty]);

  return (
    <div className="archContainer">
      <Navi
        byBrand={brands}
        byCategory={categories}
        byCleanBeauty={cleanBeauty}
        menuState={setMenuOpenClose}
        isOpen={openMenu}
        cartTotal={cartTotal}
      />
      <Outlet
        context={{
          products,
          brands,
          categories,
          cleanBeauty,
          updateCart,
          setOpenMenu,
        }}
      />
      <Footer />
    </div>
  );
}

export default App;
