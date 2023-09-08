import classNames from "classnames";
import styles from "./utils/elements.module.css";

const Message = ({ errors }) => {
  if (errors) {
    return (
      <div className={classNames(styles.message_container)}>
        <ul>
          {Object.keys(errors).map((key, index) => (
            <li key={index} className={styles.error}>
              {errors[key]}
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    null;
  }
};

export default Message;
