import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App";
import Navi
import HomePage from "./homepage";
import Footer from "./footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "Brand/:name",
    element: <Brand/>
  },
{
    path: "Category/:name",
    element: <Category/>
  },
    {
    path: "CleanBeautyTags/:name",
    element: <CleanBeautyTags/>
  }

]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
