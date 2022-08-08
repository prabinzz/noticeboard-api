// imports
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

mongoose.connect(process.env.MONGO_DB_CONNECTION).catch((err) => {
  console.log(err);
});

// middleware
app.use(bodyParser.json());
app.use(cors());

// route imports
const loginRoute = require("./routes/login");
const signupRoute = require("./routes/signup");
const noticeRoute = require("./routes/notice");

// route middlewares
app.use("/login", loginRoute);
app.use("/signup", signupRoute);
app.use("/notice", noticeRoute);

app.listen(process.env.DEFAULT_PORT, () => {
  console.log("Server Started at port " + process.env.DEFAULT_PORT);
});
