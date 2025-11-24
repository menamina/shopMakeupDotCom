import { it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import userEvent from "@testing-library/user-event"
import Navi from "../components/nav.jsx";

it("opens + closes clicked navi items [brands, category, clean beauty]", () => {

  const user = userEvent.setup();
  const fakeMenuState = vi.fn();
  render(
    <MemoryRouter initialEntries={["/"]}>
      <Navi
        byBrand={["glossier", "maybelline", "e.l.f"]}
        byCategory={["palette", "eyes", "lips"]}
        byCleanBeauty={["cruelty free", "natural"]}
        menuState={fakeMenuState}
        isOpen={null}
        cartTotal={0}
      />
    </MemoryRouter>
  );
  
  expect(screen.getByText("glosser")).not.toBeInTheDocument();
  await user.click(screen.getByText("/brands"));
  expect(fakeMenuState).toHaveBeenCalledTimes(1);
  expect(fakeMenuState).toHaveBeenCalledWith("brands")

  rerender (
    <MemoryRouter initialEntries={["/"]}>
      <Navi
        byBrand={["glossier", "maybelline", "e.l.f"]}
        byCategory={["palette", "eyes", "lips"]}
        byCleanBeauty={["cruelty free", "natural"]}
        menuState={fakeMenuState}
        isOpen={"brands"}
        cartTotal={0}
      />
    </MemoryRouter>
  )

   expect(screen.getByText("glosser")).toBeInTheDocument();
   expect(screen.getByText("maybelline")).toBeInTheDocument();
   expect(screen.getByText("e.l.f")).not.toBeInTheDocument();
});

it("navigates to correct [title] page when clicked", () => {
  const user = userEvent.setup();
  render(
    <MemoryRouter initialEntries={["/"]}>
      <Navi
        byBrand={fakeBrands}
        byCategory={[]}
        byCleanBeauty={[]}
        menuState={() => {}}
        isOpen={null}
        cartTotal={0}
      />
    </MemoryRouter>
  );

  await user.click(screen.getByText("nars"));
  expect(window.location.pathname).toBe("Brand/nars");
});
