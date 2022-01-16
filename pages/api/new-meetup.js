import { MongoClient, ObjectId } from "mongodb";

// /api/new-meetup
// POST

const handler = async (req, res) => {
  if (req.method === "POST") {
    try {
      const data = req.body;

      const client = await MongoClient.connect(
        "mongodb+srv://snowman:fcirUH1YH9PWBcKj@cluster0.x4m0j.mongodb.net/meetups?retryWrites=true&w=majority"
      );
      const db = client.db();

      const meetupsCollection = db.collection("meetups");
      const result = await meetupsCollection.insertOne(data);

      console.log(result);

      client.close();

      res.status(201).json({ message: "Meetup inserted!!" });
    } catch (error) {
      console.log(error.message);
    }
  }
  if (req.method === "DELETE") {
    try {
      const data = req.body;

      const client = await MongoClient.connect(
        "mongodb+srv://snowman:fcirUH1YH9PWBcKj@cluster0.x4m0j.mongodb.net/meetups?retryWrites=true&w=majority"
      );
      const db = client.db();

      const meetupsCollection = db.collection("meetups");
      const result = await meetupsCollection.deleteOne({
        _id: ObjectId(data),
      });

      console.log(result);

      client.close();

      res.status(201).json({ message: "Meetup deleted!!" });
    } catch (error) {
      console.log(error.message);
    }
  }
};

export default handler;
