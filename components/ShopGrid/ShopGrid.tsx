import ShopItem, { Item, ShopItemProps } from "../ShopItem/ShopItem";
import styles from "./ShopGrid.module.css";

interface ShopGridProps {
  items: Item[];
  onAdd: (id: string) => void;
}

const ShopGrid = ({ items, onAdd }: ShopGridProps) => {
  return (
    <div className={styles.shopGrid} data-testid="shop-grid">
      {items.map((item) => (
        <ShopItem key={item.id} item={{ ...item }} onAdd={onAdd}></ShopItem>
      ))}
    </div>
  );
};

export default ShopGrid;
