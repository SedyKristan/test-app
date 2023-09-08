"use client";

import classNames from "classnames";

import styles from "./utils/layout.module.css";
import Container from "@components/Elements/Container";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Titlebar = ({ cart }) => {
  const router = useRouter();
  const [cartTotal, setCartTotal] = useState(0);
  useEffect(() => {
    const totalQuantity = cart.reduce(
      (total, item) => total + item.quantity,
      0
    );
    setCartTotal(totalQuantity);
  }, [cart]);
  return (
    <Container>
      <div className={classNames(styles.title_bar)}>
        <span
          className={classNames(
            "material-symbols-rounded not-filled",
            styles.titlebar_icon
          )}
        >
          search
        </span>
        <div>
          <div className={classNames(styles.brand_name_box)}>
            <span className={classNames("label", styles.brand_name_top)}>
              make home
            </span>
            <h4>beautiful</h4>
          </div>
        </div>
        <div
          className={classNames(styles.titlebar_icon_box)}
          onClick={() => router.push("/cart")}
        >
          <span
            className={classNames(
              "material-symbols-rounded not-filled",
              styles.titlebar_icon
            )}
            data-before-content="1"
          >
            shopping_cart
          </span>
          {cartTotal > 0 && (
            <div className={classNames(styles.cart_quantity)}>
              <p className="tiny">{cartTotal}</p>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Titlebar;
