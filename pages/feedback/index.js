import React, { useState } from "react";
import { extractFeedback } from "../api/feedback";

function FeedbackPage(props) {
  const [feedbackDetail, setFeedbackDetail] = useState(null);
  function loadDetail(id) {
    fetch(`/api/${id}`)
      .then((res) => res.json())
      .then((resData) => {
        setFeedbackDetail(resData);
      })
      .catch((error) => {
        setFeedbackDetail(null);
        console.error(error);
      });
  }
  return (
    <React.Fragment>
      <ul>
        {props.feedbackItems.map((item) => (
          <li key={item.id}>
            {item.feedback}
            <button onClick={loadDetail.bind(null, item.id)}>Detail</button>
          </li>
        ))}
      </ul>
      {feedbackDetail && <pre>{JSON.stringify(feedbackDetail, null, 4)}</pre>}
    </React.Fragment>
  );
}

export async function getServerSideProps(context) {
  const list = extractFeedback();
  return {
    props: {
      feedbackItems: list || [],
    },
  };
}

export default FeedbackPage;
