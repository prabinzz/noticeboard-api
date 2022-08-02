// imports
require('dotenv').config();
const express = require("express")

const app = express()

// route imports
const loginRoute = require("./routes/login")
const signupRoute = require("./routes/signup")
const noticeRoute = require("./routes/notice")

// middlewares
app.use("/login",loginRoute);
app.use("/signup",signupRoute);
app.use("/notice",noticeRoute);

app.listen(process.env.DEFAULT_PORT, ()=> {
    console.log("Server Started at port"+ process.env.DEFAULT_PORT);
})


