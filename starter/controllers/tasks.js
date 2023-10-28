const Task = require('../models/Task')
const getAllTasks = (req, res) => {
  res.send('all items from controllers')
}

const createTask = async (req, res) => {
  const task = await Task.create(req.body)
  res.status(201).json({task})
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