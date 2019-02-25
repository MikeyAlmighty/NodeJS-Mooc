const { MongoClient } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
  if (err) {
    return console.log("MongoDB Connection error: ", err);
  }

  console.log("Connected to MongoDB successfully");
  
});
