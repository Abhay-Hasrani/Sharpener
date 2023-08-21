// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { MongoClient } from "mongodb";

async function handler(req, res) {
  const type = req.method;
  const data = req.body;
  // console.log("url : ",process.env.MONGO_API_URL);
  const client = await MongoClient.connect("mongodb+srv://abhayhasrani:LpOAuUeKnpCSDnKR@cluster0.b34ijnd.mongodb.net/todos?retryWrites=true&w=majority");
  const db = client.db();
  const todoCollection = db.collection("todos");
  if (type === "POST") { 
    const result = await todoCollection.insertOne(data);
    res.status(201).json({ message: "Todo Inserted to Database" });
  }
  client.close();
}
export default handler;
