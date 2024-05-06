import { Price } from "@/components/PriceTag/PriceTag";
import {
  calculatePrice,
  formatPrice,
  formatPriceWithDiscount,
} from "../priceCalcs";

const price: Price = { basePrice: 10, discount: 0, currency: "€" };
const discountedPrice: Price = { basePrice: 10, discount: 20, currency: "€" };

describe("Items helpers", () => {
  it("calculates prices correctly without discount", () => {
    const finalPrice = calculatePrice(price);

    expect(finalPrice.changed).toBe(false);
    expect(finalPrice.finalPrice).toBe(10);
  });

  it("calculates prices correctly with discount", () => {
    const finalPrice = calculatePrice(discountedPrice);

    expect(finalPrice.changed).toBe(true);
    expect(finalPrice.finalPrice).toBe(8);
  });

  it("formats price correctly with default formats", () => {
    const formatted = formatPrice(price.basePrice);

    expect(formatted).toEqual("10.00 €");
  });

  it("formats price correctly with custom formats", () => {
    const formatted = formatPrice(price.basePrice, "GBP", 3);

    expect(formatted).toEqual("10.000 GBP");
  });

  it("formats price correctly with a discount", () => {
    const formatted = formatPriceWithDiscount(price.basePrice, 20);

    expect(formatted).toEqual("10.00 €(-20%)");
  });
});
