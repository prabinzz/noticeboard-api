const jwt = require("jsonwebtoken")

module.exports = (req, res, next) => {
    // check if access token is present in header
    const token = req.header("auth-token")
    if(!token) return res.status(401).send("Access Denied")

    // verify token
    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET)
        req.user = verified
        next()
    } catch (err) {
        res.status(400).send("Invalid Token")
    }
}