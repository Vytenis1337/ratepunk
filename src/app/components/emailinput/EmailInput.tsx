"use client";

import styles from "./page.module.scss";
import { useState, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import EmailSuccess from "../emailsuccess/EmailSucces";
import MailIconSvg from "../svgs/MailIconSvg";

type FormFields = {
  email: string;
};

const EmailInput = () => {
  const [lastEnteredEmail, setLastEnteredEmail] = useState("");
  const [isEmailConfirmed, setIsEmailConfirmed] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormFields>();

  useEffect(() => {
    const savedEmail = localStorage.getItem("lastEnteredEmail");
    if (savedEmail) {
      setLastEnteredEmail(savedEmail);
    }
  }, []);

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      console.log("FRONT END EMAIL IS:", data.email);

      localStorage.setItem("lastEnteredEmail", data.email);

      setLastEnteredEmail(data.email);
      setIsEmailConfirmed(true);
      reset();
    } catch (error) {
      console.error("Error saving email:", error);
    }
  };
  return (
    <>
      {!isEmailConfirmed ? (
        <form
          className={styles.form_container}
          onSubmit={handleSubmit(onSubmit)}
        >
          {errors.email && (
            <p style={{ color: "red", textAlign: "left" }}>
              {errors.email.message}
            </p>
          )}
          <div className={styles.inputWithIcon}>
            <div className={styles.mailSvg}>
              <MailIconSvg />
            </div>
            <input
              {...register("email", {
                required: "Email is required",
                validate: (value) => {
                  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                  if (!pattern.test(value)) {
                    return "Please enter a valid email address";
                  }
                  return true;
                },
              })}
              type="text"
              placeholder="Enter your email adress "
            />
          </div>
          <button disabled={isSubmitting} type="submit">
            Get Referral Link
          </button>
        </form>
      ) : (
        <EmailSuccess />
      )}
    </>
  );
};

export default EmailInput;
