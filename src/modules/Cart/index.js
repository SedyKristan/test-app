import List from "@components/Elements/List";
import productsList from "../Home/utils/productsList.json";
import { useEffect, useState } from "react";

const CartComponent = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [quantity, setQuantity] = useState(0);

  const getQuantityForProduct = (productId) => {
    const cartItem = cartItems.find((item) => item.id === productId);
    return cartItem ? cartItem.quantity : 0;
  };

  useEffect(() => {
    const storedCartItems = JSON.parse(sessionStorage.getItem("cart")) || [];
    setCartItems(storedCartItems);
  }, []);

  useEffect(() => {
    const matchingProducts = productsList.filter((product) =>
      cartItems.some((item) => item.id === product.product_id)
    );
    setCartProducts(matchingProducts);
  }, [cartItems]);

  return (
    <List
      title="My cart"
      products={cartProducts}
      quantity={getQuantityForProduct}
    />
  );
};

export default CartComponent;
