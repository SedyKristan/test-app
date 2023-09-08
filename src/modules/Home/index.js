import Card from "@components/Elements/Card";
import productsList from "./utils/productsList.json";
import classNames from "classnames";
import Container from "@components/Elements/Container";

import styles from "./utils/home.module.css";
import { Fragment } from "react";
import Category from "@components/Layout/Category";
import { useRouter } from "next/router";

const Home = ({ chosenCategory, addToCart, handleCategorySelection }) => {
  const router = useRouter();
  return (
    <Fragment>
      <Category
        handleClick={handleCategorySelection}
        chosenCategory={chosenCategory}
      />
      <Container customClassName={styles.home}>
        {productsList
          .filter((product) => {
            if (chosenCategory === "popular") {
              return product.rating >= 4;
            } else {
              return product.type === chosenCategory;
            }
          })
          .sort((a, b) => {
            if (a.priority === b.priority) {
              return a.name.localeCompare(b.name);
            }
            return a.priority - b.priority;
          })

          .map((product, index) => (
            <div key={index}>
              <Card
                imageUrl={product.main_image}
                name={product.name}
                price={product.price}
                id={product.product_id}
                addToCart={addToCart}
                handleOnclick={() => router.push(`home/${product.product_id}`)}
              />
            </div>
          ))}
      </Container>
    </Fragment>
  );
};

export default Home;
