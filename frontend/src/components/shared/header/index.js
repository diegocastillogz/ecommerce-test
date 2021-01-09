import React from "react";
import styles from "./header.module.scss";
import headerLogo from "assets/images/logo.png";
import SearchInput from "../searchInput";

const Header = () => (
  <header className={styles.header} role="banner">
    <a className={styles.header__nav_logo}>
      <img src={headerLogo} alt="Mercadolibre página principal" />
    </a>
    <SearchInput />
  </header>
);

export default Header;
