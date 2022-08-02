const router = require("express").Router();
const loginValidation = require("../validations/loginValidation")


router.post("/", (req, res) => {
    const validation = loginValidation.validate(req.query)
    
    if (validation.error) {
		return res
			.status(418)
			.send({ error: true, message: validation.error.message });
	}

    res.send("Login Route");
})

module.exports = router;