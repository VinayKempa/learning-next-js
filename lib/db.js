import { MongoClient } from "mongodb";

export async function connectToDB() {
  try {
    return await MongoClient.connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTERNAME}.wztxk.mongodb.net/my-site?retryWrites=true&w=majority`
    );
  } catch (error) {
    console.error(error);
    return null;
  }
}
