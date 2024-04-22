import { useState } from "react";

const useSaveEmail = () => {
  const [isEmailConfirmed, setIsEmailConfirmed] = useState(false);

  const saveEmail = async (email: string) => {
    try {
      const response = await fetch("/api/saveEmail", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      setIsEmailConfirmed(true);

      if (!response.ok) {
        throw new Error("Failed to save email");
      }

      console.log("Email saved successfully");
    } catch (error) {
      console.error("Error saving email:", error);
    }
  };

  return { isEmailConfirmed, saveEmail };
};

export default useSaveEmail;
