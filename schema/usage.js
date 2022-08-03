const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    user: {
        type: String,
    },
    request: {
        type: Number,
    }
})

module.exports = mongoose.model("Usage", userSchema)