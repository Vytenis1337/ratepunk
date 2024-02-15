import React from "react";
import styles from "./page.module.scss";
import EmailForm from "../emailform/EmailForm";

const LeftSide = () => {
  return (
    <div className={styles.main}>
      <EmailForm />
    </div>
  );
};

export default LeftSide;
