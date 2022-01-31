import { getSession } from "next-auth/react";
import { hashPassword, verifyPassword } from "../../../lib/auth";
import { connectToDB } from "../../../lib/db";

async function handler(req, res) {
  if (req.method === "PATCH") {
    const session = await getSession({ req });
    if (!session) {
      res.status(401).json({ message: "Not authenticated" });
      return;
    }
    const userEmail = session.user.email;
    const oldPassword = req.body.oldPassword;
    const newPassword = req.body.newPassword;

    const client = await connectToDB();
    if (client) {
      const db = client.db();
      const userCollection = db.collection("users");
      const user = await userCollection.findOne({ email: userEmail });
      if (!user) {
        res.status(404).json({ message: "User not found" });
        client.close();
        return;
      }
      const currentPassword = user.password;
      const passwordsAreEqual = await verifyPassword(
        oldPassword,
        currentPassword
      );
      if (!passwordsAreEqual) {
        res.status(422).json({ message: "Old password did not match." });
        client.close();
        return;
      }

      const result = await userCollection.updateOne(
        { email: userEmail },
        {
          $set: {
            password: await hashPassword(newPassword),
          },
        }
      );
      client.close();
      res.status(200).json({ message: "Password updated !!" });
    } else {
      res.status(500).json({ message: "DB not connected" });
      return;
    }
  } else {
    res.status(503).json({ message: "Service not available" });
  }
}

export default handler;
