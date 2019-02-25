const { MongoClient } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
  if (err) {
    return console.log("MongoDB Connection error: ", err);
  }

  console.log("Connected to MongoDB successfully");

  const db = client.db("TodoApp");
  db.collection("Todos")
    .find({ completed: true })
    .toArray()
    .then(
      docs => {
        console.log("TODOS");
        console.log(JSON.stringify(docs, undefined, 2));
      },
      err => {
        console.log("Unable to fetch toDo's: ", err);
      }
    );
  client.close();
});
