import classNames from "classnames";
import styles from "../utils/elements.module.css";
import { useState } from "react";

const Stepper = ({ steps, onStepChange }) => {
  const [countStep, setStep] = useState(0);

  const handleStepClick = (index) => {
    setStep(index);
    onStepChange(index);
  };

  return (
    <div className={classNames(styles.stepper_container)}>
      {steps.map((step, index) => (
        <div
          key={index}
          className={classNames(styles.steps, {
            [styles.active]: index === countStep,
          })}
          onClick={() => handleStepClick(index)}
        ></div>
      ))}
    </div>
  );
};

export default Stepper;
