const mongoose = require("../connection");

const todoSchema = new mongoose.Schema({
    text:String,
});

const Todo = mongoose.model("Todo",todoSchema);

module.exports = Todo;