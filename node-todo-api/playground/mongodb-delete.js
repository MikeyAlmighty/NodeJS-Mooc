const { MongoClient } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
  if (err) {
    return console.log("MongoDB Connection error: ", err);
  }

  console.log("Connected to MongoDB successfully");

  const db = client.db("TodoApp");
  db.collection("Todos")
    .deleteMany({ text: "BatMan sucks" })
    .then(res => {
      console.log(JSON.stringify(res, undefined, 2));
    });

  db.collection("Todos")
    .deleteOne({ text: "BatMan sucks" })
    .then(res => {
      console.log(JSON.stringify(res, undefined, 2));
    });

  db.collection("Todos")
    .deleteOne({ text: "BatMan sucks" })
    .then(res => {
      console.log(JSON.stringify(res, undefined, 2));
    });

  client.close();
});
