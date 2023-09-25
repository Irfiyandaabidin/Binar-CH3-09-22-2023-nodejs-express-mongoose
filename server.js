const app = require('./app')
const mongoose = require('mongoose')

const port = process.env.port || 4000

const database = 'mongodb://localhost:27017/tours-binar'
mongoose.connect(database, {
  useNewUrlParser: true,
})
.then(() => {
  console.log("DB Success Connected")
})

app.listen(port, () => {
  console.log(`App running on port ${port}...`)
})
