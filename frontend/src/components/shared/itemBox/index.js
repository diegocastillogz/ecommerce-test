import React from "react";
import { setCurrencyFormat } from "helpers";
import styles from "./itemBox.module.scss";

const ItemBox = ({ item: { title, picture, price, freeShipping, city } }) => (
  <li className={styles.itemBox}>
    <img
      src={picture}
      alt={`imagen de ${title}`}
      className={styles.itemBox__itemImage}
    />
    <div className={styles.itemBox__mainInfo}>
      <p>
        {setCurrencyFormat(price.amount)}{" "}
        {freeShipping && (
          <div
            className={styles.itemBox__freeShipping}
            aria-label="envio gratis"
          />
        )}
      </p>
      <p>{city}</p>
    </div>
    <div>
      <p>{title}</p>
    </div>
  </li>
);

export default ItemBox;
