const express = require('express');
const tasks = require('./routes/tasks');
const app = express();

// Middlewares
app.use(express.json());

// Routes
app.get('/hello', (req, res) => {
  res.send('Task Manager App');
});

app.use('/api/v1/tasks', tasks)

const port = 3000;

app.listen(port, console.log(`Express server live at port ${port}`));