import { useState, useEffect } from "react";
import Navi from "./nav.jsx";
import HomePage from "./components/homepage.jsx";
import Clicked from "./components/clicked.jsx";
import Footer from "./components/footer.jsx";

function App() {
  const [products, updateProducts] = useState([]);

  const [brands, updateBrands] = useState([]);
  const [categories, updateCategories] = useState([]);
  const [cleanBeauty, updateCleanBeauty] = useState([]);
  const [apiErr, updateApiErr] = useState("");

  useEffect(() => {
    async function makeupAPI() {
      try {
        const apiLink = await fetch(
          "http://makeup-api.herokuapp.com/api/v1/products.json"
        );
        const result = await apiLink.json();
        const productList = result.map((item) => item);
        const brandList = result.map((item) => item.brand);
        const categoryList = result.map((item) => item.product_category);
        const tagList = result.map((item) => item.tag_list);

        updateProducts(productList);
        updateBrands(brandList);
        updateCategories(categoryList);
        updateCleanBeauty(tagList);

        console.log(brands, categories, cleanBeauty, apiErr);
      } catch (error) {
        updateApiErr(error);
      }
    }
    makeupAPI;
  }, []);

  return (
    <div className="archContainer">
      <Navi />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
