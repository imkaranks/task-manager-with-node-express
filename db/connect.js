const mongoose = require('mongoose');

const connectDB = (url) => {
  return mongoose
    .connect(url, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    })
    .then(() => console.log("connected to db..."))
    .catch(error => console.log(error));
}

module.exports = connectDB;