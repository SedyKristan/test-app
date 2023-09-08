import classNames from "classnames";

import styles from "./utils/elements.module.css"

const Container = ({ children, customClassName }) => {
  return <section className={classNames(customClassName, styles.container)}>{children}</section>;
};

export default Container;
