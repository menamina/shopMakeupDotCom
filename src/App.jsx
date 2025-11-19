import { useState, useEffect } from "react";
import Navi from "./components/nav.jsx";
import HomePage from "./components/homepage.jsx";
import Footer from "./components/footer.jsx";

function App() {
  const [products, updateProducts] = useState([]);

  const [brands, updateBrands] = useState([]);
  const [categories, updateCategories] = useState([]);
  const [cleanBeauty, updateCleanBeauty] = useState([]);
  const [apiErr, updateApiErr] = useState("");

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
        const categoryList = noNull(result.map((item) => item.category));
        const tagList = noDupes(result.flatMap((item) => item.tag_list));

        updateProducts(productList);
        updateBrands(brandList);
        updateCategories(categoryList);
        updateCleanBeauty(tagList);
      } catch (error) {
        updateApiErr(error);
      }
    }
    makeupAPI();
    console.log(products, brands, categories, cleanBeauty, apiErr);
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
