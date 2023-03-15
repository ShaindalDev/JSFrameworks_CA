import { StyledContactForm } from "./styles";
import PrimaryButton from "../PrimaryButton";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup
  .object({
    fullName: yup
      .string()
      .matches(/^[a-zA-Z\s]*$/, "Must not contain any numbers or symbols")
      .min(3, "Must be at least 3 characters long")
      .required(),
    subject: yup
      .string()
      .min(3, "Must be at least 3 characters long")

      .required(),
    email: yup
      .string()
      .matches(/\S+@\S+\.\S+/, "Must be a valid email address")
      .required(),
    body: yup
      .string()
      .min(3, "Must be at least 3 characters long")
      .max(1000, "Cannot be longer than 1000 characters")
      .required(),
  })
  .required();

export default function ContactForm() {
  useEffect(() => {
    document.title = "Johnsen eCommerce | Contact us";
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function handleSubmission(data) {
    console.log(data);
  }

  return (
    <StyledContactForm onSubmit={handleSubmit(handleSubmission)}>
      <fieldset align="center" >
        <legend>All fields are required</legend>
        <label htmlFor="fullName">Full name</label>
        <input
          {...register("fullName", {
            required: true,
            minLength: 3,
          })}
          name="fullName"
          placeholder="Full name"
        ></input>
        <p className="error-message">{errors.fullName?.message}</p>

        <label htmlFor="subject">Subject</label>
        <input
          {...register("subject", {
            required: true,
            minLength: 3,
          })}
          name="subject"
          placeholder="Subject"
        ></input>
        <p className="error-message">{errors.subject?.message}</p>

        <label htmlFor="email">Email</label>
        <input
          {...register("email", {
            required: true,
          })}
          type="email"
          name="email"
          placeholder="Email"
        ></input>
        <p className="error-message">{errors.email?.message}</p>

        <label htmlFor="body">Message</label>
        <textarea
          {...register("body", {
            required: true,
            minLength: 3,
          })}
          name="body"
          placeholder="Write your message here"
        ></textarea>
        <p className="error-message">{errors.body?.message}</p>

        <div className="button-container">
          <PrimaryButton text={"Submit"} />
        </div>
      </fieldset>
    </StyledContactForm>
  );
}
