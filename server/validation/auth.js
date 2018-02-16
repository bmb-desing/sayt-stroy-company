import Joi from 'joi'
export function loginValidation (req, res, next) {
  const schema = {
    email: Joi.string().min(3).email().required(),
    password: Joi.string().min(1).required()
  }
  const {error} = Joi.validate(req.body, schema)
  if (error != null) {
    return res.status(400).send(error.details)
  } else {
    next()
  }
}
