import Head from "next/head";
import React from "react";
import ContactForm from "../../components/contact/contact-form";

function ContactPage() {
  return (
    <React.Fragment>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Send messages usng this form" />
      </Head>
      <ContactForm />
    </React.Fragment>
  );
}

export default ContactPage;
