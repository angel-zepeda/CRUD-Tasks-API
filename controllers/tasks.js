'use strict';

var Task = require('../models/Task');

var index = (req, res) => (
  Task.find({})
    .exec((err, tasks) => {
      if (err) res.status(500).send({ message: err });
      if (!tasks) res.status(404).send({ message: 'Theres no tasks' })
      res.status(200).send({ tasks })
    })
)

function create(req, res) {
  var { title, description } = req.body;
  var task = new Task;
  task.title = title;
  task.description = description;
  task.save((err, task) => {
    if (err) return res.status(500).send({ message: err });
    if (!task) return res.status(500).send({ message: 'Cannot save task' });
    return res.status(200).send({ task: task })
  })
}

function deleteTask(req, res) {
  const { id } = req.params;
  Task.findByIdAndDelete(id)
    .exec((err, removed) => {
      if (err) return res.status(500).send({ message: err });
      if (!removed) return res.status(404).send({ message: 'Cannot delete item' });
      return res.status(200).send({ message: 'Task deleted' });
    })
}

function show(req, res) {
  const { id } = req.params;
  Task.findById(id)
    .exec((err, task) => {
      if (err) return res.status(500).send({ message: err });
      if (!task) return res.status(404).send({ message: 'Task missing' });
      return res.status(200).send({ task });
    })
}

function update(req, res) {
  const { id } = req.params;
  var newTask = req.body;
  Task.findByIdAndUpdate(id, newTask, (err, taskUpdated) => {
    if (err) return res.status(500).send({ message: err });
    if (!taskUpdated) return res.status(404).send({ message: 'Error, cannot update' });
    return res.status(200).send({ message: 'Task updated' })
  })
}

module.exports = {
  index,
  create,
  deleteTask,
  show,
  update
}