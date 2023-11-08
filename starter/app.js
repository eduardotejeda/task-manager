const express = require('express')
const app = express()
const tasks = require('./routes/task')
const connectDB = require('./db/connect')
require('dotenv').config() // for secret variable
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

// middleware
app.use(express.static('./public'))
app.use(express.json())


//routes
app.use('/api/v1/tasks', tasks)
app.use(notFound)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000; // Esto establece el puerto al puerto del ambiente donde se corre la aplicacion OR el puerto 5000.



const start =  async () => {
  try {
    await connectDB(process.env.MONGO_URI) // access secret variable en .env
    app.listen(port, console.log(`Listenig on port ${port}...`))

  } catch(error) {
    console.log(error)

  }
}

start()


