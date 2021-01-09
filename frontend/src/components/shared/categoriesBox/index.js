import React from "react";
import styles from "./categoriesBox.module.scss";

const CategoriesBox = ({ categories }) => {
  if (categories?.length) {
    return (
      <ul className={styles.categoriesBox}>
        {categories
          .map((category, index) => (
            <li key={index}>
              {category} {">"}{" "}
            </li>
          ))
          .slice(0, 7)}
      </ul>
    );
  }
  return null;
};

export default CategoriesBox;
