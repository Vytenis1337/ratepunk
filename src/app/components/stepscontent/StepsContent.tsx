import React from "react";
import styles from "./page.module.scss";
import { StepsArray } from "@/app/utils/StepsArray";
import StepsItem from "../stepsitem/StepsItem";

const StepsContent = () => {
  return (
    <div className={styles.main}>
      {StepsArray.map((step) => (
        <StepsItem key={step.id} {...step} />
      ))}
    </div>
  );
};

export default StepsContent;
