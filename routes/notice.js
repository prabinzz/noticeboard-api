const router = require("express").Router();


router.get("/", (req, res) => {
    res.send("Notice Route");
})

module.exports = router;