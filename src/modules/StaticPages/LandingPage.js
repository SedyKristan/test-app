import Container from "@components/Elements/Container";

import styles from "./utils/staticPages.module.css";
import classNames from "classnames";
import Button from "@components/Elements/Button";
import { Fragment, useReducer } from "react";
import { useRouter } from "next/router";

const LandingPage = () => {
  const router = useRouter();
  return (
    <Fragment>
      <div className={classNames(styles.hero_container)}>
        <Container>
          <h1 className={classNames(styles.hero_title_upper)}>
            make your <br />
            home beautiful
          </h1>
          <p className={classNames(styles.hero_title_lower)}>
            The best simple place where you discover most wonderful furnitures
            and make your home beautiful
          </p>
        </Container>
      </div>
      <div className={classNames(styles.button_wrapper)}>
        <Button
          label="Get Started"
          customClassName={styles.button}
          handleOnclick={() => router.push("account/sign-in")}
          type="link"
        />
      </div>
    </Fragment>
  );
};

export default LandingPage;
