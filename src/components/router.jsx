import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "./homepage";
import BrandPage from "./brand";
import CategoryPage from "./category";
import TagsPage from "./cleanBeautyTags";
import Cart from "./cart";
import Login from "./login.jsx";
import SignUp from "./signUp.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "Brand/:bname", element: <BrandPage /> },
      { path: "Category/:cname", element: <CategoryPage /> },
      { path: "Tags/:tname", element: <TagsPage /> },
      { path: "Cart", element: <Cart /> },
      { path: "Login", element: <Login /> },
      { path: "SignUp", element: <SignUp /> },
    ],
  },
]);

export default router;
