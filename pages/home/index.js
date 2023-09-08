"use client";

import Layout from "@components/Layout";
import Home from "@modules/Home";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [chosenCategory, setChosenCategory] = useState("popular");
  const [cart, setCart] = useState([]);

  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cart)); // Convert to JSON string
  }, [cart]);

  const handleCategorySelection = (categoryLabel) => {
    setChosenCategory(categoryLabel);
  };

  const addToCart = (productId) => {
    const existingProduct = cart.find((item) => item.id === productId);

    if (existingProduct) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart((prevCart) => [...prevCart, { id: productId, quantity: 1 }]);
    }
  };

  return (
    <Layout
      display={{ navbar: true, titlebar: true, footer: false }}
      cart={cart}
      module={"Home"}
    >
      <Home
        addToCart={addToCart}
        chosenCategory={chosenCategory}
        handleCategorySelection={handleCategorySelection}
      />
    </Layout>
  );
};

export default HomePage;
