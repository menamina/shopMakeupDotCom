import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import HomePage from "./homepage";
import BrandPage from "./brand";
import CategoryPage from "./category";
import TagsPage from "./cleanBeautyTags";
import Cart from "./cart";

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
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

export default router;
