import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      return res.status(400).json({ message: "Invalid input" });
    }
    // Store in database;

    const newMessage = {
      email,
      name,
      message,
    };

    let client;
    try {
      client = await MongoClient.connect(
        "mongodb+srv://kempatest:kempatest@cluster0.wztxk.mongodb.net/my-site?retryWrites=true&w=majority"
      );
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Could not connect to DB" });
    }

    const db = client.db();
    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Failed storing message" });
      return;
    }
    client.close();
    res.status(200).json({ message: "Successfully stored message" });
  }
}

export default handler;
