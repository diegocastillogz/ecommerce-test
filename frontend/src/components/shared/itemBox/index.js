import React from "react";
import { setCurrencyFormat } from "helpers";
import styles from "./itemBox.module.scss";
import { Link } from "react-router-dom";

const ItemBox = ({
  item: { id, title, picture, price, freeShipping, city },
}) => (
  <li>
    <Link to={`/items/${id}`} className={styles.itemBox}>
      <img
        src={picture}
        alt={`imagen de ${title}`}
        className={styles.itemBox__itemImage}
      />
      <div className={styles.itemBox__mainInfo}>
        {
          <div>
            <p>{setCurrencyFormat(price.amount)} </p>
            {freeShipping && (
              <div
                className={styles.itemBox__freeShipping}
                aria-label="envio gratis"
              />
            )}
          </div>
        }
        <p>{city}</p>
      </div>
      <div>
        <p>{title}</p>
      </div>
    </Link>
  </li>
);

export default ItemBox;
