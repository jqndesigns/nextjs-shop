import { Price } from "../components/PriceTag/PriceTag";

export const calculatePrice = ({ basePrice, discount }: Price) => {
  return discount === 0
    ? { finalPrice: basePrice, changed: false }
    : {
        finalPrice: basePrice - (discount / 100) * basePrice,
        changed: true,
      };
};

export const formatPrice = (
  price: number,
  currency: string = "€",
  decimals: number = 2
) => {
  return `${price.toFixed(decimals)} ${currency}`;
};

export const formatPriceWithDiscount = (
  price: number,
  discount: number,
  currency: string = "€",
  decimals: number = 2
) => {
  return `${formatPrice(price, currency, decimals)}(-${discount}%)`;
};
