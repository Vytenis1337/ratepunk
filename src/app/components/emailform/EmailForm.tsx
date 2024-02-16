import styles from "./page.module.scss";
import EmailInput from "../emailinput/EmailInput";

const EmailForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.heading}>
          <h2>Refer friends and get rewards</h2>

          <p>
            Refer your friends to us and earn hotel booking vouchers. We'll give
            you 1 coin for each friend that installs our extension. Minimum
            cash-out at 20 coins.
          </p>
        </div>
        <EmailInput />
        <p>Limits on max rewards apply</p>
      </div>
    </div>
  );
};

export default EmailForm;
