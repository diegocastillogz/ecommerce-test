import React from "react";
import ItemBox from "../itemBox";
import styles from "./itemsList.module.scss";

const ItemsList = ({ itemsList }) => {
  if (itemsList?.length) {
    return (
      <ol className={styles.itemsList}>
        {itemsList.map((item, index) => (
          <ItemBox key={index} item={item} />
        ))}
      </ol>
    );
  }
  return null;
};

export default ItemsList;
