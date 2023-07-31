const express = require('express');
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
const app = express();
require('dotenv').config();

// Middlewares
app.use(express.json());

// Routes
app.get('/hello', (req, res) => {
  res.send('Task Manager App');
});

app.use('/api/v1/tasks', tasks)

const port = 3000;

const startServer = async() => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Express server live at port ${port}`));
  } catch(error) {
    console.log(error);
  }
}

startServer();