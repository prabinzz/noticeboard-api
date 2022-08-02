const Joi = require("joi");

const  schema = Joi.object({
    user_name: Joi.string()
        .min(8)
        .alphanum()
        .required(),
    password: Joi.string()
        .max(20)
        .min(8)
        .required()
})

module.exports = schema;