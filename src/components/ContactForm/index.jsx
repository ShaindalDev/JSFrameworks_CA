import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { StyledContactForm } from "./styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ContactCTAButton from "../ContactCTA";


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
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({ resolver: yupResolver(schema) });

  function handleSubmission(data) {
    console.log(data);
    setSuccess(true);
  }
    useEffect(() => {
      if (isSubmitSuccessful) {
        reset();

      }
    }, [isSubmitSuccessful, reset]);

    if (success) {
      return (
        <StyledContactForm onSubmit={handleSubmit(handleSubmission)}>
          <h2 align="center">Feedback submitted successfully</h2>
          <p align="center">Thank you for contacting us. Your message has been received and will be responded to as soon as possible. Have a nice day!</p>
        </StyledContactForm>
      );
    }
    return (
    <StyledContactForm onSubmit={handleSubmit(handleSubmission)}>
      <fieldset align="center" >
      <p className="required-text">*All fields are required</p>
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
          <ContactCTAButton text={"Submit"} />
        </div>
      </fieldset>
    </StyledContactForm>
  );
}


  
