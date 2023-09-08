import Carousel from "@components/Elements/Carousel";
import productsList from "./utils/productsList.json";
import { Fragment, useEffect, useState } from "react";
import classNames from "classnames";
import styles from "./utils/home.module.css";
import Container from "@components/Elements/Container";
import Button from "@components/Elements/Button";
import Counter from "@components/Elements/Counter";

const Product = ({ productId }) => {
  const [quantity, setQuantity] = useState(0);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const product = productsList.find((item) => {
    return item.product_id === productId;
  });
  useEffect(() => {
    const cart = JSON.parse(sessionStorage.getItem("cart")) || [];
    const product = cart.find((item) => {
      return item.id === productId;
    });
    setQuantity(product?.quantity || 0);
  }, []);
  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };
  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  useEffect(() => {
    const cart = JSON.parse(sessionStorage.getItem("cart")) || [];
    const updatedCart = cart.map((item) => {
      if (item.id === productId) {
        return { ...item, quantity };
      }
      return item;
    });
    sessionStorage.setItem("cart", JSON.stringify(updatedCart));
  }, [quantity, productId]);

  useEffect(() => {
    const bookmarkedItems =
      JSON.parse(sessionStorage.getItem("bookmarkedItems")) || [];
    setIsBookmarked(bookmarkedItems.includes(productId));
  }, []);

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    const bookmarkedItems =
      JSON.parse(sessionStorage.getItem("bookmarkedItems")) || [];

    const isAlreadyBookmarked = bookmarkedItems.includes(productId);

    if (!isAlreadyBookmarked) {
      bookmarkedItems.push(productId);
      sessionStorage.setItem(
        "bookmarkedItems",
        JSON.stringify(bookmarkedItems)
      );
    } else {
      const updatedBookmarks = bookmarkedItems.filter((id) => id !== productId);
      sessionStorage.setItem(
        "bookmarkedItems",
        JSON.stringify(updatedBookmarks)
      );
    }
  };

  return (
    <Fragment>
      <Carousel images={product.product_images} />
      <Container>
        <h2 className={classNames(styles.product_name)}>{product.name}</h2>
        <div className={classNames(styles.product_price_quantity)}>
          <h1>$ {product.price}</h1>
          <Counter
            quantity={quantity}
            handleIncrementQuantity={incrementQuantity}
            handleDecrementQuantity={decrementQuantity}
          />
        </div>
        <div className={classNames(styles.product_review)}>
          <span class="material-symbols-rounded filled">grade</span>
          <h4>{product.rating}</h4>
          <p>({product.review_count} reviews)</p>
        </div>
        <p className={classNames(styles.product_description)}>
          {product.description}
        </p>
        <div className={classNames(styles.button_group)}>
          <button className={classNames(styles.product_bookmark)}>
            <span
              className="material-symbols-rounded not-filled"
              onClick={handleBookmark}
            >
              {isBookmarked ? " bookmark_added" : "bookmark"}
            </span>
          </button>
          <Button
            label={"Add to cart"}
            customClassName={styles.product_button}
          />
        </div>
      </Container>
    </Fragment>
  );
};

export default Product;
