import Head from "next/head";
import { Fragment } from "react";
import Navbar from "./Navbar";
import Titlebar from "./Titlebar";
import Category from "./Category";
import classNames from "classnames";

import styles from "./utils/layout.module.css";

const Layout = ({
  title,
  children,
  router,
  cart,
  display = { navbar: true, titlebar: true, footer: true },
  module,
}) => {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      {display.titlebar && <Titlebar cart={cart} />}
      {display.navbar && <Navbar module={module} />}
      <main>{children}</main>
    </Fragment>
  );
};

export default Layout;
