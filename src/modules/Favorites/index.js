import classNames from "classnames";
import { Fragment, useEffect, useReducer, useState } from "react";
import productsList from "../Home/utils/productsList.json";
import List from "@components/Elements/List";
import { useRouter } from "next/router";

const FavoritesComponent = () => {
  const router = useRouter();
  const [bookmarkedItems, setBookmarkedItems] = useState([]);
  const [favoriteProducts, setFavoriteProducts] = useState([]);

  useEffect(() => {
    const storedBookmarks =
      JSON.parse(sessionStorage.getItem("bookmarkedItems")) || [];
    setBookmarkedItems(storedBookmarks);
  }, []);

  useEffect(() => {
    const favoriteProducts = productsList.filter((product) =>
      bookmarkedItems.includes(product.product_id)
    );
    setFavoriteProducts(favoriteProducts);
  }, [bookmarkedItems]);

  const removeFromFavorites = (productId) => {
    const updatedBookmarks = bookmarkedItems.filter((id) => id !== productId);
    sessionStorage.setItem("bookmarkedItems", JSON.stringify(updatedBookmarks));
    setBookmarkedItems(updatedBookmarks);
  };

  const addToCart = (productId) => {
    const cartItems = JSON.parse(sessionStorage.getItem("cart")) || [];
    const isAlreadyInCart = cartItems.some((item) => item.id === productId);

    if (!isAlreadyInCart) {
      cartItems.push({ id: productId, quantity: 1 });
      sessionStorage.setItem("cart", JSON.stringify(cartItems));
    }
  };

  const addAllToCart = () => {
    const cartItems = JSON.parse(sessionStorage.getItem("cart")) || [];
    const productIdsToAdd = favoriteProducts
      .filter(
        (product) => !cartItems.some((item) => item.id === product.product_id)
      )
      .map((product) => ({ id: product.product_id, quantity: 1 }));

    const updatedCartItems = [...cartItems, ...productIdsToAdd];

    sessionStorage.setItem("cart", JSON.stringify(updatedCartItems));

    router.push("/cart");
  };

  return (
    <List
      title="Favorites"
      products={favoriteProducts}
      handleRemove={removeFromFavorites}
      addToCart={addToCart}
      handleActionClick={addAllToCart}
    />
  );
};

export default FavoritesComponent;
