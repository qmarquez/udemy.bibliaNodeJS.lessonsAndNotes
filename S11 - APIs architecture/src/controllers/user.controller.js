const GetAllController = require('./base.get_all.controller');

module.exports = class UserController extends GetAllController {
  constructor({ UserService }) {
    super(UserService)
  }
}
