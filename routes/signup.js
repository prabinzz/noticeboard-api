const router = require("express").Router();
const signupValidation = require("../validations/signupValidation")
const bcryptjs = require("bcryptjs")

const User = require("../schema/user")

router.post("/", async (req, res) => {
    console.log(req.body);
    const validation = signupValidation.validate(req.body)
    
    // validate data
    if (validation.error) {
		return res
			.status(418)
			.send({ error: true, message: validation.error.message });
	}
    
    // check if user already esist 
    const emaisExist = await User.findOne({email: validation.value.email})
    if(emaisExist) return res.send({error:true, message: "Email already exist"})

    // Hash password
    const salt = await bcryptjs.genSalt(10)
    const hashedPassword = await bcryptjs.hash(req.body.password, salt)
    
    // create new user
    const user = new User({
        firstName: validation.value.firstName,
        lastName: validation.value.lastName,
        email: validation.value.email,
        password: hashedPassword
    })

    // save user to database
    const newUser = await user.save()
    res.send(newUser);
})

module.exports = router;