const { MongoClient } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
  if (err) {
    return console.log("MongoDB Connection error: ", err);
  }

  const db = client.db("TodoApp");
  db.collection().findOneAndUpdate();

  console.log("Connected to MongoDB successfully");
});
