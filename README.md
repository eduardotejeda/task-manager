# task-manager

Making a task manager program with Node and Express.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [License](#license)

## Installation

Express requiere Node.js version ^14.18+

```bash
$ Node.js hhttps://nodejs.org/en/download
$ cd yourproject
$ npm init
$ npm install express --save
$ npm run start
```

## Usage

- After `npm run start` open browser http://localhost:5000/
- The parent file, app.js, is main document.
- To close use Ctrl+C.

```
const express = require('express')
const app = express()
const tasks = require('./routes/task')

// middleware

app.use(express.json())


//routes
app.get('/hello', (req, res) => {
  res.send('Task Manager App')
})

app.use('/api/v1/tasks', tasks)

const port = 5000

app.listen(port, () => {
  console.log(`Listenig on port ${port}`)
})

```

## Features

1. Display a list of task.
2. Using the buttoms to add, delete and querry between task.

## License

This project is licensed under the MIT License.
