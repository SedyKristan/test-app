import { Fragment, useEffect } from "react";
import Container from "./Container";
import classNames from "classnames";
import styles from "./utils/elements.module.css";
import Button from "./Button";
import Counter from "./Counter";
import PromoCode from "./PromoCode";
import { useRouter } from "next/router";

const List = ({
  title,
  products,
  handleRemove,
  addToCart,
  handleActionClick,
  quantity,
}) => {
  const router = useRouter();
  const productData = products?.map((product) => ({
    id: product.product_id,
    quantity: title === "My cart" ? quantity(product.product_id) : null,
    price: product.price,
  }));

  return (
    <Fragment>
      <Container>
        <p className={classNames(styles.list_title)}>{title}</p>
        {title === "My cart" && (
          <span
            className={classNames(
              "material-symbols-rounded no-filled",
              styles.list_back
            )}
            onClick={() => router.push("/home")}
          >
            arrow_back_ios_new
          </span>
        )}
        <ul className={classNames(styles.list_row_wrapper)}>
          {products?.map((product) => {
            return (
              <li
                key={product.product_id}
                className={classNames(styles.list_row)}
              >
                <div className={classNames(styles.list_image)}>
                  <img src={product.main_image} alt="" />
                </div>
                <div className={classNames(styles.list_details)}>
                  <p className={classNames("label", styles.list_name)}>
                    {product.name}
                  </p>
                  <p>$ {product.price}</p>
                  {title === "My cart" && (
                    <div className={classNames(styles.list_counter)}>
                      <Counter quantity={quantity(product.product_id)} />
                    </div>
                  )}
                </div>
                <div className={classNames(styles.list_icons)}>
                  <span
                    className={classNames(
                      "material-symbols-rounded not-filled",
                      styles.list_icon_close
                    )}
                    onClick={() => handleRemove(product.product_id)}
                  >
                    cancel
                  </span>
                  {addToCart && (
                    <span
                      className={classNames(
                        "material-symbols-rounded filled",
                        styles.list_icon_cart
                      )}
                      onClick={() => addToCart(product.product_id)}
                    >
                      local_mall
                    </span>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
      {title === "My cart" && <PromoCode products={productData} />}
      <div
        className={classNames({
          [styles.list_button_cart]: title === "My cart",
          [styles.list_button_favorites]: title === "Favorites",
        })}
        onClick={
          title === "Favorites"
            ? handleActionClick
            : () => router.push("/complete")
        }
      >
        <Button label={title === "My cart" ? "Check out" : "Add all to cart"} />
      </div>
    </Fragment>
  );
};

export default List;
