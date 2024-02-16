import styles from "./page.module.scss";

interface StepsItemProps {
  svg: JSX.Element;
  desc: string;
  title: string;
  step: string;
}
const StepsItem = ({ svg, desc, title, step }: StepsItemProps) => {
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
