import Container from "@components/Elements/Container";
import categoryList from "./utils/categoryList.json";
import classNames from "classnames";
import styles from "./utils/layout.module.css";

const Category = ({ handleClick, chosenCategory }) => {
  const handleCategoryClick = (categoryLabel) => {
    handleClick(categoryLabel);
  };

  return (
    <Container>
      <ul className={classNames(styles.category_wrapper)}>
        {categoryList.map((category, index) => (
          <li
            key={index}
            className={classNames(styles.category_item)}
            onClick={() => handleCategoryClick(category.type)}
          >
            <span
              className={classNames(
                `material-symbols-rounded ${
                  category.type === chosenCategory ? "filled" : "not-filled"
                }`,
                styles.category_item_icon,
                {
                  [styles.category_item_filled]:
                    category.type === chosenCategory,
                  [styles.category_item_not_filled]:
                    category.type !== chosenCategory,
                }
              )}
            >
              {category.icon}
            </span>
            <p className={classNames("label")}>{category.label}</p>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Category;
