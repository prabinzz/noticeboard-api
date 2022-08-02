const Joi = require("joi");

const  schema = Joi.object({
    firstName: Joi.string()
        .alphanum()
        .required(),
    lastName: Joi.string()
        .alphanum()
        .required(),
    email: Joi.string().email(),
    password: Joi.string()
        .max(1024)
        .required()
})

module.exports = schema;