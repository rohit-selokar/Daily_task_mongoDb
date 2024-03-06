const express = require("express");
const router = express.Router();
const todoController = require("../controllers/user");

router.route("/todos")
.get(todoController.getTodo)
.post(todoController.createTodo)
.put(todoController.updatedTodo)
.delete(todoController.deletedTodo);

module.exports = router;