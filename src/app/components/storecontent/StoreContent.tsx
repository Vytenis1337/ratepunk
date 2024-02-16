import styles from "./page.module.scss";
import { StoreItemsArray } from "@/app/utils/StoreItemsArray";
import StoreItem from "../storeitem/StoreItem";
import ChromeReviewSvg from "../svgs/ChromeReview";

const StoreContent = () => {
  return (
    <div className={styles.container}>
      {StoreItemsArray.map((item) => (
        <StoreItem key={item.id} {...item} />
      ))}
      <div className={styles.review}>
        <ChromeReviewSvg />
        <p> Chrome store reviews</p>
      </div>
    </div>
  );
};

export default StoreContent;
