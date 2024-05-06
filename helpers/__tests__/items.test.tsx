import { Order } from "@/components/ShopMenu/SearchOrder/SearchOrder";
import { cleanString, mapItems, orderItems } from "../items";
import { Item } from "@/components/ShopItem/ShopItem";

const defaultItem: Item = {
  id: "3ikmnr",
  name: "ProductName",
  colours: 1,
  price: { basePrice: 10, discount: 20, currency: "€" },
  image: "image",
};

const unmappedItem = {
  id: "3ikmnr",
  name: "ProductName",
  image: "image",
  colours: 1,
  basePrice: 10,
  discount: 20,
  currency: "€",
};

describe("Items helpers", () => {
  it("map items correctly", () => {
    const mappedItem = mapItems([unmappedItem]);

    expect(mappedItem).toStrictEqual([defaultItem]);
  });

  it("normalizes strings correctly", () => {
    const someStr = "Mayúsculas ";
    const cleaned = cleanString(someStr);

    expect(cleaned).toEqual("MAYUSCULAS");
  });

  it("doesnt change array when order is NONE", () => {
    const items = mapItems();
    const ordered = orderItems(items, Order.NONE);

    expect(ordered).toBe(items);
  });

  it("orders items starting on highest calculated price", () => {
    const items = mapItems();
    const ordered = orderItems(items, Order.ASC);

    expect(ordered[0].price.basePrice).toBe(20.99);
  });

  it("orders items starting on lowest calculated price", () => {
    const items = mapItems();
    const ordered = orderItems(items, Order.DESC);

    expect(ordered[0].price.basePrice).toBe(18.99);
  });
});
