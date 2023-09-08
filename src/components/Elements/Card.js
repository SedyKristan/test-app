import styles from "./utils/elements.module.css";
import classNames from "classnames";

const Card = ({ imageUrl, name, key, price, id, addToCart, handleOnclick }) => {
  const formattedPrice = price.toFixed(2);

  const handleAddToCart = () => {
    addToCart(id);
  };

  return (
    <div className={classNames(styles.card)}>
      <div className={classNames(styles.card_image)}>
        <img
          src={imageUrl}
          alt={`product ${name} ${key}`}
          onClick={handleOnclick}
        />
        <span
          className={classNames(
            "material-symbols-rounded filled",
            styles.card_logo
          )}
          onClick={handleAddToCart}
        >
          local_mall
        </span>
      </div>
      <p className={classNames("label", styles.card_label)}>{name}</p>
      <p className={classNames("label", styles.card_price)}>
        $ {formattedPrice}
      </p>
    </div>
  );
};

export default Card;
