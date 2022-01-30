const express = require("express");
const connectDB = require("./config/db");
const app = express();
app.get("/", (req, resp) => resp.send("Api running"));
app.get("/HOME", (req, resp) => resp.send("Api YETT"));
(bodyParser = require("body-parser")),
  //CONNECT TO DB

  connectDB();

//Init middleware

app.use(
  express.json({
    extended: false,
  })
);
//define routes
app.use("/api/users", require("./Routes/api/users"));
app.use("/api/profile", require("./Routes/api/profile"));
app.use("/api/auth", require("./Routes/api/auth"));
app.use("/api/posts", require("./Routes/api/posts"));


const Port = process.env.PORT || 5000;
app.listen(Port, () => console.log("SERVER STARTED AT PORT " + Port + ""));
