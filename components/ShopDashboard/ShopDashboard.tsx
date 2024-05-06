"use client";

import structuredClone from "@ungap/structured-clone";
import { useState } from "react";

import styles from "./ShopDashboard.module.css";
import ShopGrid from "../ShopGrid/ShopGrid";
import ShopMenu from "../ShopMenu/ShopMenu";

import { orderItems as orderItems, mapItems } from "@/helpers/items";
import { cleanString } from "../../helpers/items";
import { Order } from "../ShopMenu/SearchOrder/SearchOrder";

const ShopDashboard = () => {
  const [originalList] = useState(mapItems);
  const [items, setItems] = useState(structuredClone(originalList));
  const [currOrder, setCurrOrder] = useState<Order>(Order.NONE);

  const searchItem = (ev: React.FormEvent<HTMLInputElement>) => {
    const value = cleanString(ev.currentTarget.value);
    const newItems = originalList.filter((i) =>
      cleanString(i.name).includes(value)
    );

    setItems(orderItems(newItems, currOrder));
  };

  const changeOrder = (orderType: Order) => {
    if (currOrder === orderType) return;

    setCurrOrder(orderType);

    setItems((prevItems) => {
      return orderItems(prevItems, orderType);
    });
  };

  const addItem = (id: string) => {
    console.log("Do something...", id);
  };

  return (
    <div className={styles.main}>
      <ShopMenu onSearch={searchItem} onChangeOrder={changeOrder}></ShopMenu>
      <ShopGrid items={items} onAdd={addItem}></ShopGrid>
    </div>
  );
};

export default ShopDashboard;
