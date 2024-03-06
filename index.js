const express = require("express");
const bodyParser = require("body-parser");
const todoRouter = require("./routes/user");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use(todoRouter);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
