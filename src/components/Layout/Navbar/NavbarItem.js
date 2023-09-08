"use client";

import classNames from "classnames";

import styles from "./utils/navbar.module.css";
import { useRouter } from "next/router";

const NavbarItem = ({
  type = "link",
  label,
  icon,
  to,
  customClassName,
  isActive,
}) => {
  const router = useRouter();
  return (
    <div className={customClassName} onClick={() => router.push(to)}>
      <span
        className={classNames(
          `material-symbols-rounded ${isActive ? "filled" : "not-filled"}`,
          styles.nav_icon,
          { [styles.nav_icon_main]: isActive }
        )}
      >
        {icon}
      </span>
      {label}
    </div>
  );
};

export default NavbarItem;
