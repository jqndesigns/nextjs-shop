import { render, screen } from "@testing-library/react";
import ShopGrid from "../ShopGrid";
import { mapItems } from "@/helpers/items";

describe("Shop Grid", () => {
  it("renders a correct number of items", () => {
    render(<ShopGrid items={mapItems()} onAdd={jest.fn()}></ShopGrid>);
    expect(screen.getByTestId("shop-grid").children).toHaveLength(8);
  });

  it("renders without crashing if given an empty array of items", () => {
    render(<ShopGrid items={[]} onAdd={jest.fn()}></ShopGrid>);
    expect(screen.getByTestId("shop-grid").children).toHaveLength(0);
  });
});
