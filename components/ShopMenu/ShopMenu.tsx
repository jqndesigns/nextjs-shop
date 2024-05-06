import SearchBar from "./SearchBar/SearchBar";
import styles from "./ShopMenu.module.css";
import SearchOrder, { Order } from "./SearchOrder/SearchOrder";

interface ShopMenuProps {
  onSearch: (ev: React.FormEvent<HTMLInputElement>) => void;
  onChangeOrder: (orderType: Order) => void;
}

const ShopMenu = ({ onSearch, onChangeOrder }: ShopMenuProps) => {
  return (
    <div className={styles.menu}>
      <SearchBar onSearch={onSearch}></SearchBar>
      <SearchOrder onChangeOrder={onChangeOrder}></SearchOrder>
    </div>
  );
};

export default ShopMenu;
