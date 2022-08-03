const { default: mongoose } = require("mongoose");
const Usage = require("./schema/usage")

module.exports = async (req, res, next) => {
    const user = req.user._id;
    
    const idExist = await Usage.findOne({user: user})
    if (!idExist) {
        const usage = new Usage({
            user: user,
            request: 1
        })
        await usage.save()
    }else{
        idExist.request += 1;
        idExist.save()
    }
    next()
}