const router = require("express").Router();


router.post("/", (req, res) => {
    res.send("Login Route");
})

module.exports = router;