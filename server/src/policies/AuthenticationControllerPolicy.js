const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(new RegExp('^[a-zA-Z0-9]{8,32}'))
    }

    // validate req.body against schema defined above
    /* eslint-disable */
    const { error, value } = Joi.validate(req.body, schema)
    /* eslint-enable */

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'You must provide a valid email address'
          })
          break
        case 'password':
          res.status(400).send({
            error: `The provided password failed to meet the following rules
            <br>
            1. The password can only contain uppercase letters, lowercase letters, and numbers
            <br:
            2. It must be greater than 8 characters and less than 32 in length
            `
          })
          break
        default:
          res.status(400).send({
            error: 'Invalid registration information'
          })
      }
    } else {
      next()
    }
  }
}
