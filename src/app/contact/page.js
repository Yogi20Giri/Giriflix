import React from "react";
import ContactCard from "../components/ContactCard";
import css from "@/app/contact/contact.module.css";
import ContactForm from "@/app/components/ContactForm";
const Contact = () => {
  return (
    <>
      <div className={css.container}>
        <h1>Contact us</h1>
        <ContactCard />
        <section className={css.contact_section}>
          <h2>
            We&apos;d love to hear <span>from you</span>
          </h2>
          <ContactForm />
        </section>
      </div>
      <iframe
        width={100}
        height={450}
        style={{ border: 0 }}
        className={css.mapping}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60284.32115962877!2d73.06519662550404!3d19.205242398391118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7958503ef5c9b%3A0xb6845d738f5a6525!2sDombivli%20East%2C%20Dombivli%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1697004558559!5m2!1sen!2sin"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
};

export default Contact;
