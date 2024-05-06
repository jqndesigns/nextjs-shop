import Image from "next/image";
import styles from "./SearchOrder.module.css";

export enum Order {
  NONE,
  ASC,
  DESC,
}

interface SearchOrderProps {
  onChangeOrder: (orderType: Order) => void;
}

const SearchOrder = ({ onChangeOrder }: SearchOrderProps) => {
  return (
    <div className={styles.searchOrder}>
      <Image
        src="/minus.png"
        alt="Orden descendiente"
        width={50}
        height={50}
        onClick={() => onChangeOrder(Order.DESC)}
      ></Image>
      <Image
        src="/plus.png"
        alt="Orden ascendiente"
        width={50}
        height={50}
        onClick={() => onChangeOrder(Order.ASC)}
      ></Image>
    </div>
  );
};

export default SearchOrder;
