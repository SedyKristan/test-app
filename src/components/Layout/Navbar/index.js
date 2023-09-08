"use client";

import { useState } from "react";
import { useRouter } from "next/router";

import navbarItems from "./utils/navbarItems.json";
import NavbarItem from "./NavbarItem";
import styles from "./utils/navbar.module.css";
import classNames from "classnames";

const Navbar = ({ module }) => {
  const router = useRouter();
  return (
    <nav className={classNames(styles.navbar)}>
      {navbarItems.map((item, index) => (
        <NavbarItem
          key={index}
          to={item.route}
          icon={item.icon}
          customClassName={classNames(styles.navbar_item)}
          isActive={module === item.title}
        />
      ))}
    </nav>
  );
};

export default Navbar;
