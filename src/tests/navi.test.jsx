import { it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import Navi from "../components/nav.jsx";

it("opens + closes clicked navi items [brands, category, clean beauty]", async () => {
  const user = userEvent.setup();
  let testIsOpen = null;
  const fakeMenuState = vi.fn((value) => {
    testIsOpen = value;
  });
  function TestWrapper() {
    return (
      <MemoryRouter initialEntries={["/"]}>
        <Navi
          byBrand={["glossier", "maybelline", "e.l.f."]}
          byCategory={["palette", "eyes", "lips"]}
          byCleanBeauty={["cruelty free", "natural"]}
          menuState={fakeMenuState}
          isOpen={testIsOpen}
          cartTotal={0}
        />
      </MemoryRouter>
    );
  }

  const { rerender } = render(<TestWrapper />);

  rerender(<TestWrapper />);

  expect(testIsOpen).toBe(null);
  expect(screen.queryByText("glossier")).not.toBeInTheDocument();
  expect(screen.queryByText("palette")).not.toBeInTheDocument();
  expect(screen.queryByText("cruelty free")).not.toBeInTheDocument();

  await user.click(screen.getByText(/brands/i));
  expect(fakeMenuState).toHaveBeenCalledTimes(1);
  expect(fakeMenuState).toHaveBeenCalledWith("brands");
  expect(testIsOpen).toBe("brands");

  rerender(<TestWrapper />);

  expect(testIsOpen).toBe("brands");
  expect(screen.getByText("glossier")).toBeInTheDocument();
  expect(screen.getByText("maybelline")).toBeInTheDocument();
  expect(screen.getByText("e.l.f.")).toBeInTheDocument();

  expect(screen.queryByText("palette")).not.toBeInTheDocument();
  expect(screen.queryByText("natural")).not.toBeInTheDocument();

  await user.click(screen.getByText(/category/i));
  expect(fakeMenuState).toHaveBeenCalledTimes(2);
  expect(fakeMenuState).toHaveBeenCalledWith("category");
  expect(testIsOpen).toBe("category");

  rerender(<TestWrapper />);

  expect(testIsOpen).toBe("category");
  expect(screen.getByText("palette")).toBeInTheDocument();
  expect(screen.getByText("eyes")).toBeInTheDocument();
  expect(screen.getByText("lips")).toBeInTheDocument();

  expect(screen.queryByText("maybelline")).not.toBeInTheDocument();
  expect(screen.queryByText("glossier")).not.toBeInTheDocument();

  await user.click(screen.getByText(/clean beauty/i));
  expect(fakeMenuState).toHaveBeenCalledTimes(3);
  expect(fakeMenuState).toHaveBeenCalledWith("clean beauty");
  expect(testIsOpen).toBe("clean beauty");

  rerender(<TestWrapper />);
  expect(testIsOpen).toBe("clean beauty");
  expect(screen.getByText("natural")).toBeInTheDocument();
  expect(screen.getByText("cruelty free")).toBeInTheDocument();

  expect(screen.queryByText("palette")).not.toBeInTheDocument();
  expect(screen.queryByText("eyes")).not.toBeInTheDocument();

  await user.click(screen.getByText("brands"));

  rerender(<TestWrapper />);

  expect(fakeMenuState).toHaveBeenCalledWith("brands");
  expect(screen.getByText("glossier")).toBeInTheDocument;
  expect(screen.queryByText("cruelty free")).not.toBeInTheDocument();

  rerender(<TestWrapper />);

  expect(testIsOpen).toBe(null);

  await user.click(screen.getByRole("preShop", { name: /close menu/ }));

  rerender(<TestWrapper />);

  expect(fakeMenuState).toHaveBeenCalledWith(null);
  expect(testIsOpen).toBe(null);
  expect(screen.queryByText("glossier")).not.toBeInTheDocument();
});

it("navigates to correct [title] page when clicked", async () => {
  const user = userEvent.setup();
  let testIsOpen = null;
  const fakeMenuState = vi.fn((value) => {
    testIsOpen = value;
  });
  function TestWrapper() {
    return (
      <MemoryRouter initialEntries={["/"]}>
        <Navi
          byBrand={["glossier", "maybelline", "e.l.f.", "nars"]}
          byCategory={["palette", "eyes", "lips"]}
          byCleanBeauty={["cruelty free", "natural"]}
          menuState={fakeMenuState}
          isOpen={testIsOpen}
          cartTotal={0}
        />
      </MemoryRouter>
    );
  }

  const { rerender } = render(<TestWrapper />);

  rerender(<TestWrapper />);

  await user.click(screen.getByText(/brands/i));
  await user.click(screen.getByText("nars"));
  expect(window.location.pathname).toBe("/Brand/nars");
  await user.click(screen.getByText(/brands/i));
  expect(window.location.pathname).toBe("/Brand/maybelline");

  rerender(<TestWrapper />);

  await user.click(screen.getByText(/category/i));
  await user.click(screen.getByText("palette"));
  expect(window.location.pathname).toBe("/Category/palette");
  await user.click(screen.getByText(/category/i));
  await user.click(screen.getByText("eyes"));
  expect(window.location.pathname).toBe("/Category/eyes");

  rerender(<TestWrapper />);

  await user.click(screen.getByText(/clean beauty/i));
  await user.click(screen.getByText("natural"));
  expect(window.location.pathname).toBe("/Tags/natural");
  await user.click(screen.getByText(/clean beauty/i));
  await user.click(screen.getByText("cruelty free"));
  expect(window.location.pathname).toBe("/Tags/cruelty free");
});

it("navigates homepage + cart component", async () => {
  const user = userEvent.setup();

  render(
    <MemoryRouter initialEntries={["/"]}>
      <Navi
        byBrand={["glossier", "maybelline", "e.l.f."]}
        byCategory={["palette", "eyes", "lips"]}
        byCleanBeauty={["cruelty free", "natural"]}
        menuState={() => {}}
        isOpen={null}
        cartTotal={0}
      />
    </MemoryRouter>
  );

  await user.click(
    screen.getByRole("link", {
      name: /white cake with strawberrys on top - brand logo/i,
    })
  );
  expect(window.location.pathname).toBe("/");

  await user.click(screen.getByAltText(/shopping cart icon/i));
  // expect(window.location.pathname).toBe("/Cart");
});
