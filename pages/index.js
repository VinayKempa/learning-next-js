import { useRef, useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const emailRef = useRef(null);
  const feedbackRef = useRef(null);
  const [feedbackList, setFeedbackList] = useState([]);

  const submitFormHandler = (e) => {
    e.preventDefault();
    const enteredEmail = emailRef.current.value;
    const enteredFeedback = feedbackRef.current.value;

    fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify({ email: enteredEmail, feedback: enteredFeedback }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  function loadFeedbackHandler() {
    fetch("/api/feedback")
      .then((res) => res.json())
      .then((data) => {
        setFeedbackList(data);
      })
      .catch((error) => {
        setFeedbackList([]);
      });
  }

  return (
    <div className={styles.container}>
      <h1>The home page</h1>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" ref={emailRef}></input>
        </div>
        <div>
          <label htmlFor="feedback">Your feedback</label>
          <textarea id="feedback" rows={5} ref={feedbackRef}></textarea>
        </div>
        <button>Submit Feedback</button>
      </form>
      <button type="button" onClick={loadFeedbackHandler}>
        Load Feedback
      </button>
      <ul>
        {feedbackList.map((fd) => (
          <li key={fd.id}>
            {fd.feedback} - <small>{fd.email}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}
