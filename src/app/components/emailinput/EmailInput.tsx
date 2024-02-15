"use client";

import React from "react";
import styles from "./page.module.scss";
import { useState, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
// import {
//   getEmailFromJsonbin,
//   saveEmailToJsonbin,
// } from "@/app/utils/jsonbinService";
import axios from "axios";

type FormFields = {
  email: string;
};

const EmailInput = () => {
  const [lastEnteredEmail, setLastEnteredEmail] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormFields>();

  useEffect(() => {
    const savedEmail = localStorage.getItem("lastEnteredEmail");
    if (savedEmail) {
      setLastEnteredEmail(savedEmail);
    }
  }, []);

  // const onSubmit: SubmitHandler<FormFields> = async (data) => {
  //   try {
  //     console.log(data.email);

  //     await axios.post("/api/saveEmail", { email: data.email });
  //     setLastEnteredEmail(data.email);
  //     reset();
  //   } catch (error) {
  //     console.error("Error saving email:", error);
  //   }
  // };

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      console.log("FRONT END EMAIL IS:", data.email);

      localStorage.setItem("lastEnteredEmail", data.email);

      setLastEnteredEmail(data.email);
      reset();
    } catch (error) {
      console.error("Error saving email:", error);
    }
  };
  return (
    <form className={styles.form_container} onSubmit={handleSubmit(onSubmit)}>
      {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
      <input
        {...register("email", {
          required: "Email is required",
          validate: (value) => {
            if (!value.includes("@")) {
              return "Email must include @";
            }
            return true;
          },
        })}
        type="text"
        placeholder={lastEnteredEmail}
      />
      <button type="submit">Get Referral Link</button>
    </form>
  );
};

export default EmailInput;
