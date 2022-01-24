import fs from "fs";
import path from "path";

export function buildFeedbackPath() {
  return path.join(process.cwd(), "data", "feedback.json");
}
export function extractFeedback() {
  const fileData = fs.readFileSync(buildFeedbackPath());
  return JSON.parse(fileData);
}

function handler(req, res) {
  if (req.method === "POST") {
    const { email, feedback } = req.body;
    const newFeedback = {
      email,
      feedback,
      id: new Date().toISOString(),
    };
    // store
    const data = extractFeedback();
    data.push(newFeedback);
    fs.writeFileSync(buildFeedbackPath(), JSON.stringify(data));
    res.status(201).json(newFeedback);
  } else {
    const data = extractFeedback();
    res.status(200).json(data);
  }
}

export default handler;
