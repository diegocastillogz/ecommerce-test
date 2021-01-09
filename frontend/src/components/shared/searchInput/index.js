import React from "react";
import searchIconImage from "assets/images/search-icon.png";
import styles from "./searchInput.module.scss";

const SearchInput = () => (
  <form className={styles.searchInput} role="search">
    <input className={styles.searchInput__inputBox} />
    <button type="submit" className={styles.searchInput__searchButton}>
      <img alt="buscar" src={searchIconImage} />
    </button>
  </form>
);

export default SearchInput;
