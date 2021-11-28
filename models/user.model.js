const { model } = require('mongoose');

module.exports = model('users', {
  username: String,
  password: String,
  firstName: String,
  lastName: String,
});
