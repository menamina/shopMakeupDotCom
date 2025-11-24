import { it, expect, vi } from "vitest";
import { render, waitFor } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router";
import App from "../App";
import FakeOutlet from "./products.test";

const fakeProducts = [
  { brand: "Nars", product: "bouncy blush", category: "blush", price: 4.99 },
  { brand: "l'orEal", product: "sun kissed", category: "bronzer", price: 5.99 },
  {
    brand: null,
    product: "single shadow stick",
    category: "eyes",
    price: 3.99,
  },
];

it("runs useEffect + updates products, category, + clean beauty", async () => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeProducts),
    })
  );

  render(
    <MemoryRouter initialEntries={["/"]}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route element={<FakeOutlet />}></Route>
        </Route>
      </Routes>
    </MemoryRouter>
  );

  await waitFor(() => {
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });

  const productsText = await screen.findByTestId("products");
  const categoriesText = await screen.findByTestId("categories");
  const cleanBeautyText = await screen.findByTestId("cleanBeauty");

  const products = JSON.parse(productsText.textContent);
  const categories = JSON.parse(categoriesText.textContent);
  const cleanBeauty = JSON.parse(cleanBeautyText.textContent);

  expect(
    products.every((product) => product.brand !== null && product.brand !== "")
  ).toBe(true);
  expect(
    categories.every(
      (product) => product.category !== null && product.category !== ""
    )
  ).toBe(true);
  expect(
    cleanBeauty.every(
      (product) => product.tag_list !== null && product.tag_list !== ""
    )
  ).toBe(true);
});
