require("dotenv").config();
const cors = require("cors");
const express = require("express");
const conncetDb = require("./config/db.js");
const taskRoutes = require("./routes/taskRoutes.js");
const userRoutes = require("./routes/UserRoutes.js");

const app = express();
const port = process.env.PORT || 6900;

conncetDb();

app.use(express.json());
app.use(cors());

app.use("/api/tasks", taskRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  const greet = `
    <h1>Todo List API</h1>
    <p>Use the following endpoints:</p>
    <ul>
      <li><a href="/api/tasks">Tasks API </a> <code> ---api--> (/api/tasks) [GET, POST, DELETE, PUT]</code></li>
      <li><a href="/api/users">Users API</a> <code> ---api--> (/api/tasks) [POST]</code></a></li>
    </ul>
    <p>For more information, please refer to the documentation. <code> <a href="https://github.com/Hope-Dies-Here/todo-api/blob/main/DOC.md">
      here </a> </code></p>
  `;
  res.send(greet);
})
app.listen(port, () => console.log("Server is litsening... on port", port));
