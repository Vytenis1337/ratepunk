import React from "react";
import styles from "./page.module.scss";
import StepsContent from "../stepscontent/StepsContent";

const RightSide = () => {
  return (
    <div className={styles.main}>
      <StepsContent />
    </div>
  );
};

export default RightSide;
