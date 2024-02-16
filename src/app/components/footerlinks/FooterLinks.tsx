import styles from "./page.module.scss";
import { FooterLinksArray } from "@/app/utils/FooterLinksArray";

const FooterLinks = () => {
  return (
    <div className={styles.container}>
      <h4>Quick Links</h4>
      {FooterLinksArray.map((link) => (
        <div key={link.id}>
          <p>{link.name}</p>
        </div>
      ))}
    </div>
  );
};

export default FooterLinks;
