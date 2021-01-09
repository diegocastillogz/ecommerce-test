import React from "react";
import styles from "./header.module.scss";
import headerLogo from "assets/images/logo.png";
import SearchInput from "shared/searchInput";
import { Link } from "react-router-dom";

const Header = () => (
  <header className={styles.header} role="banner">
    <div className={styles.header__container}>
      <Link to="/items" className={styles.header__navLogo} tabIndex="1">
        <img src={headerLogo} alt="Mercadolibre página principal" />
      </Link>
      <SearchInput />
    </div>
  </header>
);

export default Header;
