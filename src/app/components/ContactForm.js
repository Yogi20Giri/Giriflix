"use client";
import css from "@/app/contact/contact.module.css";
import { Mulish } from "next/font/google";
import { useState } from "react";
import { submitContact } from "../contact/actions";
const mulish = Mulish({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});
const ContactForm = () => {
  const [status, setStatus] = useState(null);

  const handleSubmit = async (formData) => {
    try {
      const response = await submitContact({
        username: formData.get("username"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        message: formData.get("message"),
      });
      if (response.status === 200) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <form className={css.contact_form} action={handleSubmit}>
        <div className={css.input_field}>
          <label htmlFor="username" className={css.label}>
            Username
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Please enter your username."
              className={mulish.className}
              required
            />
          </label>
        </div>
        <div className={css.input_field}>
          <label htmlFor="email" className={css.label}>
            Email
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Please enter your email."
              className={mulish.className}
              required
            />
          </label>
        </div>
        <div className={css.input_field}>
          <label htmlFor="phone" className={css.label}>
            Mobile
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Please enter your phone."
              className={mulish.className}
              required
            />
          </label>
        </div>
        <div className={css.input_field}>
          <label htmlFor="message" className={css.label}>
            Message
            <textarea
              name="message"
              id="message"
              placeholder="Please enter your message."
              className={mulish.className}
              rows={5}
              required
            />
          </label>
        </div>

        <div>
          {status === "success" && (
            <p className={css.success_msg}>Thank you for your message</p>
          )}
          {status === "error" && (
            <p className={css.error_msg}>
              There was an error submitting your message. Please try again!{" "}
            </p>
          )}
          <button className={mulish.className} type="submit">
            Send message
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
