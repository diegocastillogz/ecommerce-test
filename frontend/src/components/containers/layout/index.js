import React from "react";
import style from "./layout.module.scss";

const Layout = ({ children }) => (
  <main className={style.layout}>{children}</main>
);

export default Layout;
