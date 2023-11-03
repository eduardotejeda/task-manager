const express = require('express')
const app = express()
const tasks = require('./routes/task')
const connectDB = require('./db/connect')
require('dotenv').config() // for secret variable

// middleware
app.use(express.static('./public'))
app.use(express.json())


//routes
app.use('/api/v1/tasks', tasks)

const port = 5000;

const start =  async () => {
  try {
    await connectDB(process.env.MONGO_URI) // access secret variable en .env
    app.listen(port, console.log(`Listenig on port ${port}...`))

  } catch(error) {
    console.log(error)

  }
}

start()


