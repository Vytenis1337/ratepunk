import styles from "./page.module.scss";

interface StoreItemProps {
  svg: JSX.Element;
  desc: string;
  name: string;
}

const StoreItem = ({ desc, name, svg }: StoreItemProps) => {
  return (
    <div className={styles.container}>
      {svg}
      <div className={styles.description}>
        <p>{desc}</p>
        <p className={styles.name}>{name}</p>
      </div>
    </div>
  );
};

export default StoreItem;
