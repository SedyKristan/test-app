import classNames from "classnames";
import styles from "./utils/elements.module.css";

const Counter = ({
  quantity,
  handleIncrementQuantity,
  handleDecrementQuantity,
}) => {
  const formattedQuantity = quantity < 10 ? `0${quantity}` : quantity;

  return (
    <div className={classNames(styles.product_quantity)}>
      <button onClick={handleIncrementQuantity}>
        <span className="material-symbols-rounded not-filled">add</span>
      </button>
      <p>{formattedQuantity}</p>
      <button onClick={handleDecrementQuantity}>
        <span className="material-symbols-rounded not-filled">remove</span>
      </button>
    </div>
  );
};

export default Counter;
