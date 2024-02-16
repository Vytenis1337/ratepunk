import styles from "./page.module.scss";
import RatePunkLogoSvg from "../svgs/RatePunkLogoSvg";

const FooterDescription = () => {
  return (
    <div className={styles.container}>
      <RatePunkLogoSvg />
      <p className={styles.description}>
        Ratepunk compares hotel room prices across the major online travel
        agencies. When you search for a room, Ratepunk extension scans the top
        booking sites and runs a price comparison, so you can be confident in
        knowing you're getting the best deal!
      </p>
    </div>
  );
};

export default FooterDescription;
