import { extractFeedback } from "./feedback";

function handler(req, res) {
  const { feedbackId } = req.query;
  const data = extractFeedback();
  const feedbackdata = data.find((item) => item.id == feedbackId);
  res.status(200).json(feedbackdata);
}

export default handler;
