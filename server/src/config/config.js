module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'workoutapp',
    user: process.env.DB_USER || 'workoutapp',
    password: process.env.DB_PASSWORD || 'workoutapp',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './workoutapp.sqlite'
    }
  }
}
