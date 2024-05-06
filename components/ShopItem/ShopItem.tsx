import classNames from "classnames";
import styles from "./ShopItem.module.css";
import Image from "next/image";
import PriceTag, { Price } from "../PriceTag/PriceTag";

export interface Item {
  id: string;
  name: string;
  image: string;
  colours: number;
  price: Price;
}

export interface ShopItemProps {
  item: Item;
  onAdd: (id: string) => void;
}

const ShopItem = ({ item, onAdd }: ShopItemProps) => {
  const { id, name, image, colours, price } = item;

  const colorClasses = classNames(styles.text, styles.gray, {
    [styles.invisible]: colours <= 1,
  });

  return (
    <div className={styles.item}>
      <div className={styles.imgContainer}>
        <Image
          src={`/itemImg/${image}.png`}
          alt={name}
          width={200}
          height={200}
          className={styles.img}
        />
      </div>
      <div className={styles.productName}>
        <span>{name}</span>
      </div>
      <PriceTag price={price}></PriceTag>
      <div data-testid="colour-info" className={colorClasses}>
        <span>más colores</span>
      </div>
      <div className={styles.btn}>
        <button onClick={() => onAdd(id)}>AÑADIR</button>
      </div>
    </div>
  );
};

export default ShopItem;
