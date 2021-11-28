const mongoose = require('mongoose');

module.exports = () => {
  return new Promise((resolve, reject) => {
    mongoose.connect('mongodb://localhost:27017/nodeJs')
      .then((con) => {
        if (con) {
          resolve('Connection successfully');
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
};
