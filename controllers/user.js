const Todo = require("../models/user");

exports.getTodo = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.createTodo = async (req, res) => {
  const { text } = req.body;

  try {
    const newTodo = new Todo({ text });
    await newTodo.save();
    res.status(201).json({ status: "success" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.updatedTodo = async (req, res) => {
  const { id, text } = req.body;

  try {
    const updatedTodo = await Todo.findOneAndUpdate(
      { _id: id },
      { text },
      { new: true }
    );

    if (updatedTodo) {
      res.json(updatedTodo);
    } else {
      res.status(404).json({ error: "Todo not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.deletedTodo = async (req, res) => {
  const { id } = req.body;

  try {
    const deletedTodo = await Todo.findOneAndDelete({ _id: id });

    if (deletedTodo) {
      res.json({ status: "deleted successfully" });
    } else {
      res.status(404).json({ error: "Todo not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
