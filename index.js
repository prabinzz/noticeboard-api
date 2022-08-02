// imports
require('dotenv').config();
const express = require("express")

const app = express()

app.listen(process.env.DEFAULT_PORT, ()=> {
    console.log("Server Started at "+ process.env.DEFAULT_PORT);
})


