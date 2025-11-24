import { it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import userEvent from "@testing-library/user-event";
import Navi from "../components/nav.jsx";

it("opens + closes clicked navi items [brands, category, clean beauty]", async () => {
  const user = userEvent.setup();
  const fakeMenuState = vi.fn();
  const { rerender } = render(
    <MemoryRouter initialEntries={["/"]}>
      <Navi
        byBrand={["glossier", "maybelline", "e.l.f."]}
        byCategory={["palette", "eyes", "lips"]}
        byCleanBeauty={["cruelty free", "natural"]}
        menuState={fakeMenuState}
        isOpen={null}
        cartTotal={0}
      />
    </MemoryRouter>
  );

  render(
    <MemoryRouter initialEntries={["/"]}>
      <Navi
        byBrand={["glossier", "maybelline", "e.l.f."]}
        byCategory={["palette", "eyes", "lips"]}
        byCleanBeauty={["cruelty free", "natural"]}
        menuState={fakeMenuState}
        isOpen={null}
        cartTotal={0}
      />
    </MemoryRouter>
  );

  expect(screen.queryByText("glossier")).not.toBeInTheDocument();
  expect(screen.queryByText("palette")).not.toBeInTheDocument();
  expect(screen.queryByText("cruelty free")).not.toBeInTheDocument();

  await user.click(screen.getByText(/brands/i));
  expect(fakeMenuState).toHaveBeenCalledTimes(1);
  expect(fakeMenuState).toHaveBeenCalledWith("brands");

  rerender(
    <MemoryRouter initialEntries={["/"]}>
      <Navi
        byBrand={["glossier", "maybelline", "e.l.f."]}
        byCategory={["palette", "eyes", "lips"]}
        byCleanBeauty={["cruelty free", "natural"]}
        menuState={fakeMenuState}
        isOpen={"brands"}
        cartTotal={0}
      />
    </MemoryRouter>
  );

  expect(screen.getByText("glossier")).toBeInTheDocument();
  expect(screen.getByText("maybelline")).toBeInTheDocument();
  expect(screen.getByText("e.l.f.")).toBeInTheDocument();

  expect(screen.queryByText("palette")).not.toBeInTheDocument();
  expect(screen.queryByText("natural")).not.toBeInTheDocument();

  await user.click(screen.getByText(/category/i));
  expect(fakeMenuState).toHaveBeenCalledTimes(2);
  expect(fakeMenuState).toHaveBeenCalledWith("category");

  rerender(
    <MemoryRouter initialEntries={["/"]}>
      <Navi
        byBrand={["glossier", "maybelline", "e.l.f."]}
        byCategory={["palette", "eyes", "lips"]}
        byCleanBeauty={["cruelty free", "natural"]}
        menuState={fakeMenuState}
        isOpen={"category"}
        cartTotal={0}
      />
    </MemoryRouter>
  );

  expect(screen.getByText("palette")).toBeInTheDocument();
  expect(screen.getByText("eyes")).toBeInTheDocument();
  expect(screen.getByText("lips")).toBeInTheDocument();

  expect(screen.queryByText("maybelline")).not.toBeInTheDocument();
  expect(screen.queryByText("glossier")).not.toBeInTheDocument();

  await user.click(screen.getByText(/clean beauty/i));
  expect(fakeMenuState).toHaveBeenCalledTimes(3);
  expect(fakeMenuState).toHaveBeenCalledWith("clean beauty");

  rerender(
    <MemoryRouter initialEntries={["/"]}>
      <Navi
        byBrand={["glossier", "maybelline", "e.l.f."]}
        byCategory={["palette", "eyes", "lips"]}
        byCleanBeauty={["cruelty free", "natural"]}
        menuState={fakeMenuState}
        isOpen={"clean beauty"}
        cartTotal={0}
      />
    </MemoryRouter>
  );

  expect(screen.getByText("natural")).toBeInTheDocument();
  expect(screen.getByText("cruelty free")).toBeInTheDocument();

  expect(screen.queryByText("palette")).not.toBeInTheDocument();
  expect(screen.queryByText("eyes")).not.toBeInTheDocument();
});

it("navigates to correct [title] page when clicked", async () => {
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
  expect(window.location.pathname).toBe("/Brand/nars");
});
