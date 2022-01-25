import { useEffect, useState } from "react";
import classes from "./contact-form.module.css";
import Notification from "../ui/notification";

async function sendContactData(fields) {
  const response = await fetch(`/api/contact`, {
    method: "POST",
    body: JSON.stringify({ ...fields }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }
}

function ContactForm() {
  const [fields, setFields] = useState({});
  const [reqstatus, setRequestStatus] = useState(null); // Pending, success, error

  useEffect(() => {
    if (
      reqstatus &&
      (reqstatus.status === "success" || reqstatus.status === "error")
    ) {
      let timer = setTimeout(() => {
        setRequestStatus(null);
      }, 3000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [reqstatus]);

  async function sendMessageHandler(e) {
    e.preventDefault();
    setRequestStatus({
      status: "pending",
      title: "Sending message ...",
      message: "Your message is on its way !",
    });
    try {
      await sendContactData({ ...fields });
      setRequestStatus({
        status: "success",
        title: "Success !",
        message: "Message sent succesfully !",
      });
      setFields({});
    } catch (error) {
      setRequestStatus({
        status: "error",
        title: "Error !",
        message: error.message || "Something went wrong",
      });
    }
  }
  function inputHandler(e) {
    setFields({ ...fields, [e.target.name]: e.target.value });
  }
  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              onChange={inputHandler}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              onChange={inputHandler}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            onChange={inputHandler}
          />
        </div>
        <div className={classes.action}>
          <button>Send Message</button>
        </div>
      </form>
      {reqstatus && <Notification {...reqstatus} />}
    </section>
  );
}

export default ContactForm;
