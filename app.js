const express = require('express');
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
const app = express();
require('dotenv').config();
const notFound = require('./middleware/not-found');
const errorHandler = require('./middleware/error-handler');

// Middlewares
app.use(express.static('./public'));
app.use(express.json());

// Routes
app.use('/api/v1/tasks', tasks);
app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 3000;

const startServer = async() => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Express server live at port ${port}`));
  } catch(error) {
    console.log(error);
  }
}

startServer();