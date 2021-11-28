const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const BaseService = require('./base.service');
const { userModel } = require('../models');

module.exports = class UserService extends BaseService {
  #userModel = userModel;

  constructor() {
    super();
  }

  async login({ email, password }) {
    const foundUser = await this.#userModel.findOne({
      email,
    });
    if (foundUser && bcrypt.compareSync(password, foundUser.password)) {
      return {
        success: true,
        statusCode: 200,
        message: '',
        data: {
          token: jwt.sign({
            _id: foundUser._id,
            email,
          }, 'test', {
            algorithm: 'HS256',
          }),
        }
      }
    } else {
      return {
        success: false,
        statusCode: 401,
        message: 'Incorrect email or password',
      };
    }
  }
};
