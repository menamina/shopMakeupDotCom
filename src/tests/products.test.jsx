import { useOutletContext } from "react-router";

export default function FakeOutlet() {
  const { products, categories, cleanBeauty } = useOutletContext();
  return (
    <>
      <div data-testid="products">{JSON.stringify(products)}</div>
      <div data-testid="category">{JSON.stringify(categories)}</div>
      <div data-testid="cleanBeauty">{JSON.stringify(cleanBeauty)}</div>
    </>
  );
}
