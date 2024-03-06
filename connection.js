const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/todo")
.then(()=> console.log("MongoDb connected"))
.catch((err)=> console.log("mongoDb ERROR", err));

module.exports = mongoose;