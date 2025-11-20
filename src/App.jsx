import { useState, useEffect } from "react";
import { Outlet } from "react-router";
import Navi from "./components/nav.jsx";
import HomePage from "./components/homepage.jsx";
import Footer from "./components/footer.jsx";

function App() {
  const [products, updateProducts] = useState([]);

  const [brands, updateBrands] = useState([]);
  const [categories, updateCategories] = useState([]);
  const [cleanBeauty, updateCleanBeauty] = useState([]);
  const [apiErr, updateApiErr] = useState("");

  const [cartTotal, updateCartTotal] = useState(0);
  const [cartItems, updateCartItems] = useState({});
  const [openMenu, setOpenMenu] = useState(null);

  function setMenuOpenClose(name) {
    setOpenMenu((prev) => name);
  }

  function noDupes(list) {
    const noDuplicate = [...new Set(list)];
    return noDuplicate;
  }

  function noNull(list) {
    return list.filter((item) => item !== null && item !== "");
  }

  useEffect(() => {
    async function makeupAPI() {
      try {
        const apiLink = await fetch(
          "http://makeup-api.herokuapp.com/api/v1/products.json"
        );
        const result = await apiLink.json();
        const productList = result;
        const brandList = noDupes(noNull(result.map((item) => item.brand)));
        const categoryList = result.map((item) => item.category);
        const cleanedCategoryList = categoryList
          .filter(Boolean)
          .map((x) => x.trim())
          .map((x) => x.toLowerCase())
          .map((x) => x.replaceAll("_", " "));
        const finalCat = [...new Set(cleanedCategoryList)];
        const tagList = noDupes(result.flatMap((item) => item.tag_list));

        updateProducts(productList);
        updateBrands(brandList);
        updateCategories(finalCat);
        updateCleanBeauty(tagList);
      } catch (error) {
        updateApiErr(error);
      }
    }
    makeupAPI();
  }, []);
  useEffect(() => {
    console.log("UPDATED:", products, brands, categories, cleanBeauty);
  }, [products, brands, categories, cleanBeauty]);

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
        context={
          (products,
          brands,
          categories,
          cleanBeauty,
          cartTotal,
          updateCartTotal,
          cartItems,
          updateCartItems)
        }
      />
      <Footer />
    </div>
  );
}

export default App;
