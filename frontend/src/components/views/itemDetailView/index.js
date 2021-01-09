import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import useGetData from "hooks/useGetData";
import styles from "./itemDetailView.module.scss";
import { setCurrencyFormat } from "helpers";

const ItemDetailView = () => {
  const { pathname } = useLocation();
  const [itemDetail, setItemDetail] = useState({});

  useGetData(pathname, setItemDetail);

  return (
    <section className={styles.itemDetail}>
      {itemDetail?.title && (
        <div className={styles.itemDetail__container}>
          <img
            className={styles.itemDetail__itemImage}
            alt={`imagen de ${itemDetail.title}`}
            src={itemDetail.picture}
          />
          <div>
            <p className={styles.itemDetail__condition}>
              {itemDetail.condition} | {itemDetail.soldQuantity}
            </p>
            <h1 className={styles.itemDetail__title}>{itemDetail.title}</h1>

            <h2 className={styles.itemDetail__price}>
              {setCurrencyFormat(itemDetail?.price?.amount)}
            </h2>
            <button>comprar</button>
          </div>
          <div className={styles.itemDetail__description}>
            <span>descripción</span>
            <p>{itemDetail?.description}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default ItemDetailView;
