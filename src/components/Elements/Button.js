"use client";

import classNames from "classnames";

import styles from "./utils/elements.module.css";
import { useRouter } from "next/router";

const Button = ({
  loading,
  label,
  handleOnclick,
  customClassName,
  type = "button",
  color = "primary",
  isDisabled,
}) => {
  const router = useRouter();
  return (
    <button
      className={classNames(customClassName, styles.button)}
      disabled={isDisabled}
      onClick={handleOnclick}
    >
      {label}
    </button>
  );
};

export default Button;
