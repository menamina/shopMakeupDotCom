import { useState, useEffect } from "react";
import { Outlet } from "react-router";
import Navi from "./components/nav.jsx";
import Footer from "./components/footer.jsx";
import "./css/app.css";

export function noDupes(list) {
  const noDuplicate = [...new Set(list)];
  return noDuplicate;
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

  const [products, updateProducts] = useState([]);
  const [categories, updateCategories] = useState([]);
  const [cleanBeauty, updateCleanBeauty] = useState([]);
  const [apiErr, updateApiErr] = useState("");

  const [cartItems, updateCartItems] = useState(() => {
    if (typeof localStorage === "undefined") return [];

    try {
      const savedCart = localStorage.getItem("cartItems");
      if (!savedCart) return [];

      const parsedCart = JSON.parse(savedCart);

      if (!Array.isArray(parsedCart)) return [];

      const sanitizedCart = parsedCart
        .filter(
          (item) =>
            item &&
            typeof item.id !== "undefined" &&
            Number(item.qty) > 0 &&
            !Number.isNaN(Number(item.qty))
        )
        .map((item) => ({ id: item.id, qty: Number(item.qty) }));

      return sanitizedCart;
      // ^^ sanitized cart is what the initial val of cartItems is either the actual items or []
    } catch (error) {
      console.error("Failed to restore cart from storage", error);
      return [];
    }
  });
  const [openMenu, setOpenMenu] = useState(null);
  const cartTotal = cartItems.reduce((sum, next) => sum + next.qty, 0);

  function updateCart(id, qty) {
    const numQty = Number(qty);
    if (Number.isNaN(numQty)) return;

    updateCartItems((prev) => {
      let updated;

      if (numQty <= 0) {
        updated = prev.filter((item) => item.id !== id);
      } else {
        const exists = prev.find((item) => item.id === id);
        if (exists) {
          updated = prev.map((item) =>
            item.id === id ? { id, qty: numQty } : item
          );
        } else {
          updated = [...prev, { id, qty: numQty }];
        }
      }

      return updated;
    });
  }

  function setMenuOpenClose(name) {
    setOpenMenu(name);
  }

  function filterAllProductsByBrand(apireturn) {
    const noNull = apireturn.filter(
      (item) => item.brand !== null && item.brand !== ""
    );
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
        const finalCat = [...new Set(cleanedCategoryList)].sort((a, b) =>
          a.localeCompare(b)
        );
        const tagList = noDupes(result.flatMap((item) => item.tag_list)).sort(
          (a, b) => a.localeCompare(b)
        );

        filterAllProductsByBrand(result);
        updateCategories(finalCat);
        updateCleanBeauty(tagList);
      } catch (error) {
        console.log(error);
        updateApiErr(error);
      }
    }
    makeupAPI();
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  console.log(apiErr);

  return (
    <div className="archContainer">
      <Navi
        byBrand={brands}
        byCategory={categories}
        byCleanBeauty={cleanBeauty}
        menuState={setMenuOpenClose}
        isOpen={openMenu}
        cartTotal={cartTotal}
        updateCartItems={updateCartItems}
      />
      <Outlet
        context={{
          products,
          brands,
          categories,
          cleanBeauty,
          cartItems,
          cartTotal,
          updateCart,
          updateCartItems,
          setOpenMenu,
          setMenuOpenClose,
        }}
      />
      <Footer menuState={setOpenMenu} />
    </div>
  );
}

export default App;
