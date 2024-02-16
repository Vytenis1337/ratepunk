import styles from "./page.module.scss";

import StepsContent from "../stepscontent/StepsContent";
import EmailForm from "../emailform/EmailForm";

const SocialContent = () => {
  return (
    <div className={styles.container}>
      {" "}
      <EmailForm />
      <StepsContent />
    </div>
  );
};

export default SocialContent;
