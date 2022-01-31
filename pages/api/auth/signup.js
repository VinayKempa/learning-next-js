import { hashPassword } from "../../../lib/auth";
import { connectToDB } from "../../../lib/db";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const { email, password } = data;
    if (
      !email ||
      !email.includes("@") ||
      !password ||
      password.trim().length < 7
    ) {
      res.status(400).json({
        message:
          "Invalid input - Password should also be at least 7 characters long.",
      });
      return;
    }
    const client = await connectToDB();
    if (client) {
      const db = client.db();
      const result = await db.collection("users").insertOne({
        email,
        password: await hashPassword(password),
      });
      res.status(201).json({ message: "Created user" });
    } else {
      res.status(500).json({ message: "Not connected to DB" });
    }
  } else {
    res.status(503).json({ message: "Service not available." });
  }
}

export default handler;
