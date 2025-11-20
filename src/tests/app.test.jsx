import { it, expect, vi } from "vitest";
import { render, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import App from "../App";

const fakeProducts = [
  { brand: "nars", product: "bouncy blush", category: "blush", price: 4.99 },
  { brand: "l'oreal", product: "sun kissed", category: "bronzer", price: 5.99 },
  {
    brand: "e.l.f",
    product: "single shadow stick",
    category: "eyes",
    price: 3.99,
  },
];

it("fetches products", async () => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeProducts),
    })
  );

  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  await waitFor(() => {
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });
});
