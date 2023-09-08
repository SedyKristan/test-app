import classNames from "classnames";
import styles from "../utils/elements.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import Stepper from "./Stepper";
import { Fragment, useState } from "react";

const Carousel = ({ images }) => {
  const router = useRouter();
  const [activeImage, setActiveImage] = useState(0);

  const handleStepChange = (step) => {
    setActiveImage(step);
  };

  return (
    <Fragment>
      <div className={classNames(styles.product_image_container)}>
        <button
          className={classNames(styles.button_back)}
          onClick={() => router.push("/home")}
        >
          <span className="material-symbols-rounded not-filled">
            arrow_back_ios_new
          </span>
        </button>
        <div className={classNames(styles.product_image_box)}>
          {images.map((image, index) => {
            return (
              <div
                className={classNames(styles.product_image, {
                  [styles.active_product_image]: index === activeImage,
                })}
                key={index}
              >
                <img src={image} alt={`product ${index}`} key={index} />
              </div>
            );
          })}
        </div>
        <Stepper steps={images} onStepChange={handleStepChange} />
      </div>
    </Fragment>
  );
};

export default Carousel;
