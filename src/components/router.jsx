import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App";
import Navi
import HomePage from "./homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "Brand/:name", element: <BrandPage /> },
      { path: "Category/:name", element: <CategoryPage /> },
      { path: "Tags/:name", element: <TagsPage /> }
      { path: "Cart" element: <Cart/>}
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
