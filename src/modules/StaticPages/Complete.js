import Image from "next/image";
import completeImage from "@images/complete.png";
import classNames from "classnames";
import styles from "./utils/staticPages.module.css";
import Button from "@components/Elements/Button";
import { useRouter } from "next/router";

const CompletePage = () => {
  const router = useRouter();
  return (
    <div className={classNames(styles.complete_container)}>
      <h1>Success!</h1>
      <section>
        <Image
          layout="responsive"
          objectFit="contain"
          src={completeImage}
          alt="Brand logo"
          objectPosition="center"
        />
      </section>
      <p>Your order will be delivered soon. Thank you for choosing our app!</p>
      <div>
        <Button
          label="track your orders"
          customClassName={styles.complete_button_top}
        />
        <Button
          label="Back to home"
          customClassName={styles.complete_button_bottom}
          handleOnclick={() => router.push("/home")}
        />
      </div>
    </div>
  );
};

export default CompletePage;
