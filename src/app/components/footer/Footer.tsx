import styles from "./page.module.scss";

import FooterDescription from "../footerdescription/FooterDescription";
import FooterLinks from "../footerlinks/FooterLinks";
import FooterSocials from "../footersocials/FooterSocials";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.content}>
          <FooterDescription />
          <FooterLinks />
          <FooterSocials />
        </div>
        <p className={styles.copyright}>
          {" "}
          &copy; Ratepunk. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
