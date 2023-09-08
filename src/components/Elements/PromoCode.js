import classNames from "classnames";
import { useState, useEffect } from "react";
import styles from "./utils/elements.module.css";

const PromoCode = ({ products }) => {
  const [promoCode, setPromoCode] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const initialTotalPrice = products?.reduce(
      (total, product) => total + product.quantity * product.price,
      0
    );
    setTotalPrice(initialTotalPrice);
  }, [products]);

  const handlePromoCodeChange = (event) => {
    const value = event.target.value;
    setPromoCode(value);
    setIsValid(true);
  };

  const applyDiscount = () => {
    if (promoCode) {
      const discountMatch = promoCode.match(/^DISCOUNT..$/);
      if (discountMatch) {
        const discountPercentage = 50;
        const discountedPrice = totalPrice * (1 - discountPercentage / 100);
        setTotalPrice(discountedPrice);
      } else {
        setIsValid(false);
      }
    }
  };

  return (
    <div className={classNames(styles.promo_code_container)}>
      <div className={classNames(styles.promo_code_wrapper)}>
        <input
          type="text"
          placeholder="Enter promo code"
          value={promoCode}
          onChange={handlePromoCodeChange}
        />
        <button onClick={applyDiscount}>
          <span className="material-symbols-rounded">arrow_forward_ios</span>
        </button>
      </div>
      {!isValid && (
        <p className={classNames("small", styles.promo_code_error)}>
          Invalid promo code format
        </p>
      )}
      <p>
        <span>Total Price:</span>
        <span>${totalPrice?.toFixed(2)}</span>
      </p>
    </div>
  );
};

export default PromoCode;
