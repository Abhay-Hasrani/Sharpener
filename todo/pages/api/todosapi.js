// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { MongoClient, ObjectId } from "mongodb";

async function handler(req, res) {
  const type = req.method;
  const data = req.body;
  // console.log("url : ",process.env.MONGO_API_URL);
  const client = await MongoClient.connect(process.env.MONGO_API_URL);
  const db = client.db();
  const todoCollection = db.collection("todos");
  if (type === "POST") {
    const result = await todoCollection.insertOne(data);
    res.status(201).json({ message: "Todo Inserted to Database" });
  }
  if (type === "PUT") {
    const todoObj = data;
    let { _id, ...newValueObj } = data;
    _id = new ObjectId(todoObj._id);
    const filter = { _id };
    const newValue = { $set: { ...newValueObj } };
    const result = await todoCollection.updateOne(filter, newValue);
    res.status(201).json({
      message: `Matched count:', ${result.matchedCount} ////
    'Modified count:', ${result.modifiedCount}`,
    });
  }
  if (type === "DELETE") {
    // console.log(data);
    const _id = new ObjectId(data);
    const filter = { _id };
    const result = await todoCollection.deleteOne(filter);
    res.status(201).json({ message: result.deletedCount + " todos Deleted from Database" });
  }
  client.close();
}
export default handler;
