import React from "react";
import styles from "./page.module.scss";

const StepsItem = ({ svg, desc, title, step }: any) => {
  return (
    <div className={styles.listItem}>
      <div className={styles.description}>
        <h2>{step}</h2>
        <h3>{title}</h3>

        <p>{desc}</p>
      </div>
      <div className={styles.svgContainer}>{svg}</div>
    </div>
  );
};

export default StepsItem;
