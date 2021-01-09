import React, { Fragment } from "react";
import style from "./layout.module.scss";
import Header from "shared/header";

const Layout = ({ children }) => (
  <Fragment>
    <Header />
    <main className={style.layout}>
      <div className={style.layout__children}>{children}</div>
    </main>
  </Fragment>
);

export default Layout;
