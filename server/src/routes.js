module.exports = (app) => {
  app.post('/register', (req, res) => {
    res.send({
      message: `Hello ${req.body.email}! Your user has been signed up! Have fun!`
    })
  })
}
