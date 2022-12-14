const Joi = require("joi");

const  schema = Joi.object({
    email: Joi.string().email(),
    password: Joi.string()
        .max(1024)
        .required()
})

module.exports = schema;