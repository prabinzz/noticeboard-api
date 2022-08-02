const router = require("express").Router();


router.post("/", (req, res) => {
    res.send("Signup Route");
})

module.exports = router;