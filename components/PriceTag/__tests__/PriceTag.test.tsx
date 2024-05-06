import { render, screen } from "@testing-library/react";
import PriceTag from "../PriceTag";

describe("Price Tag", () => {
  it("renders a base price without a discount", () => {
    render(<PriceTag price={{ basePrice: 10, discount: 0, currency: "€" }} />);

    expect(screen.getByTestId("base-price")).toHaveTextContent("10.00 €");
    expect(screen.getByTestId("discount-info")).toHaveClass("invisible");
  });

  it("renders a base price with a specific format discount", () => {
    render(<PriceTag price={{ basePrice: 10, discount: 20, currency: "€" }} />);

    expect(screen.getByTestId("base-price")).toHaveTextContent("10.00 €");
    expect(screen.getByTestId("final-price")).toHaveTextContent("8.00 €(-20%)");

    expect(screen.getByTestId("discount-info")).not.toHaveClass("invisible");
    expect(screen.getByTestId("discount-info")).toHaveClass("discount");
  });
});
