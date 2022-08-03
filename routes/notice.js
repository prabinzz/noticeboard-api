const router = require("express").Router();
const verify = require("../verifyToken")
const tracker = require("../tracker")
router.get("/", [verify, tracker],(req, res) => {
    res.send("Notice Route");
})

module.exports = router;