import structuredClone from "@ungap/structured-clone";
import { items } from "../assets/itemList";
import { Item } from "../components/ShopItem/ShopItem";
import { Order } from "../components/ShopMenu/SearchOrder/SearchOrder";
import { calculatePrice } from "./priceCalcs";

export const mapItems = (itemsToMap = items) => {
  return itemsToMap.map(
    ({ id, name, image, colours, basePrice, discount, currency }) => ({
      id,
      name,
      image,
      colours,
      price: {
        basePrice,
        discount,
        currency,
      },
    })
  );
};

export const cleanString = (v: string) => {
  const newString = v
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase();
  return newString;
};

export const orderItems = (arr: Item[], orderType: Order) => {
  if (orderType === Order.NONE) return arr;

  const newItems = structuredClone(arr);
  newItems.sort(
    (a, b) =>
      calculatePrice(a.price).finalPrice - calculatePrice(b.price).finalPrice
  );

  return orderType === Order.ASC ? newItems.reverse() : newItems;
};
