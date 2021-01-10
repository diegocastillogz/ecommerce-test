import React from "react";
import styles from "./categoriesBox.module.scss";

const CategoriesBox = ({ categories }) => {
  const MAX_CATEGORIES_RENDER = 7;
  if (categories?.length) {
    return (
      <ul className={styles.categoriesBox}>
        {categories
          .slice(0, MAX_CATEGORIES_RENDER)
          .map((category, index) => (
            <li key={index}>
              {category} {">"}{" "}
            </li>
          ))}
      </ul>
    );
  }
  return null;
};

export default CategoriesBox;
