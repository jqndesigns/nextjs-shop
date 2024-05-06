import classNames from "classnames";
import styles from "./PriceTag.module.css";
import {
  calculatePrice,
  formatPrice,
  formatPriceWithDiscount,
} from "@/helpers/priceCalcs";

export interface Price {
  basePrice: number;
  discount: number;
  currency: string;
}

interface PriceProps {
  price: Price;
}

const PriceTag = ({ price }: PriceProps) => {
  const { basePrice, discount, currency } = price;
  const { finalPrice, changed } = calculatePrice(price);

  return (
    <div className={styles.tag}>
      <div className={classNames({ [styles.lineThrough]: changed })}>
        <span data-testid="base-price">{formatPrice(basePrice)}</span>
      </div>
      <div
        data-testid="discount-info"
        className={classNames({
          [styles.discount]: changed,
          [styles.invisible]: !changed,
        })}
      >
        <span data-testid="final-price">
          {formatPriceWithDiscount(finalPrice, discount)}
        </span>
      </div>
    </div>
  );
};

export default PriceTag;
