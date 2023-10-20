const getAllTasks = (req, res) => {
  res.send('all items from controllers')
}

const createTask = (req, res) => {
  res.json(req.body)
}

const getTask = (req, res) => {
  res.json({id:req.params.id})
}

const updateTask = (req, res) => {
  res.send('update single task')
}

const deleteTask = (req, res) => {
  res.send('delete single task')
}

module.exports = {
  getAllTasks, 
  createTask, 
  getTask, 
  updateTask, 
  deleteTask
}