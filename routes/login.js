const router = require("express").Router();
const User = require("../schema/user");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const lognValidation = require("../validations/loginValidation");

router.post("/", async (req, res) => {
  console.log(req.body);
  const validation = lognValidation.validate(req.body);

  // validate data
  if (validation.error) {
    return res
      .status(401)
      .send({ type: "error", message: validation.error.message });
  }

  // check if user exist
  const user = await User.findOne({ email: req.body.email });
  if (!user)
    return res.status(401).send({ type: "error", message: "Email not found" });

  // check if the password is valid
  const validPass = await bcryptjs.compare(req.body.password, user.password);
  if (!validPass)
    return res
      .status(401)
      .send({ type: "error", message: "password doesn't match" });

  // create and assign token
  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
  res.header("auth-token", token).send({
    type: "success",
    jwt: token,
    user: {
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      date: user.date,
    },
  });
});

module.exports = router;
