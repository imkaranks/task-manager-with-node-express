const getAllTasks = (req, res) => {
  res.send('all items from file');
};

const createTask = (req, res) => {
  res.json({
    status: 'created task',
    body: req.body
  });
};

const getTask = (req, res) => {
  res.json({
    status: 'single task',
    passedId: req.params.id
  });
};

const updateTask = (req, res) => {
  res.json({
    status: 'updated task',
    passedId: req.params.id
  });
};

const deleteTask = (req, res) => {
  res.json({
    status: 'deleted task',
    passedId: req.params.id
  });
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask
}