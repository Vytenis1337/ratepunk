"use client";

import styles from "./page.module.scss";
import { useState, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import EmailSuccess from "../emailsuccess/EmailSucces";
import MailIconSvg from "../svgs/MailIconSvg";
import useFetchEmail from "@/app/hooks/useFetchEmail";
import useSaveEmail from "@/app/hooks/useSaveEmail";

type FormFields = {
  email: string;
};

const EmailInput = () => {
  const emailValue = useFetchEmail();
  const { isEmailConfirmed, saveEmail } = useSaveEmail();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data.email);
    saveEmail(data.email);
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
              placeholder={emailValue}
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
