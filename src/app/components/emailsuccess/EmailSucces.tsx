import { useEffect, useState } from "react";
import styles from "./page.module.scss";
import SuccessSvg from "../svgs/SuccessSvg";

const EmailSuccess = () => {
  const [copySuccess, setCopySuccess] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(true);
  const defaultLink = "https://ratepunk.com/referral";

  const copyToClipboard = (e: { preventDefault: () => void }) => {
    navigator.clipboard
      .writeText(defaultLink)
      .then(() => {
        setCopySuccess("Copied!");
        setTimeout(() => setCopySuccess(""), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
    e.preventDefault();
  };

  const successMessageClass = showSuccessMessage
    ? styles.success_msg
    : ` ${styles.hidden}`;

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSuccessMessage(false);
    }, 5000); // Hide the success message after 3 seconds

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <div>
      <div className={styles.messages}>
        <div className={successMessageClass}>
          <SuccessSvg />
          <p>Your email confirmed!</p>
        </div>
        {copySuccess && (
          <span style={{ marginRight: "25px", color: "green" }}>
            {copySuccess}
          </span>
        )}
      </div>

      <form className={styles.form_container}>
        <input
          type="text"
          placeholder="Enter new value"
          value={defaultLink}
          readOnly
        />
        <button onClick={copyToClipboard} type="button">
          Copy
        </button>
      </form>
    </div>
  );
};

export default EmailSuccess;
