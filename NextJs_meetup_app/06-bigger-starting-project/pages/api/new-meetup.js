import { MongoClient } from "mongodb";

async function handler(req, res) {
  const type = req.method;
  const data = req.body;
  const client = await MongoClient.connect(
    "mongodb+srv://abhayhasrani:LpOAuUeKnpCSDnKR@cluster0.b34ijnd.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const database = client.db();
  const meetupCollection = database.collection("meetups");
  if (type === "POST") {
    const result = await meetupCollection.insertOne(data);
    // console.log(result);
    res.status(201).json({ message: " Meetup Inserted! " });
  }
//   if (type === "GET") {
//     const result = await meetupCollection.find().toArray();
//     // console.log(result);
//     res.status(201).json({ message: " Meetups Retrieved! ", meetups: result });
//   }
// used better approach in home page to get 
  client.close();
}
export default handler;
