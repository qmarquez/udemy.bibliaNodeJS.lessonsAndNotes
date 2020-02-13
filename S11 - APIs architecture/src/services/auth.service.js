module.exports = class AuthService {
  constructor({ jwtHelper, UserService, errors: { ValidationError } }) {
    this.jwtHelper = jwtHelper;
    this.UserService = UserService;
    this.ValidationError = ValidationError;
  }

  async signUp(user) {
    const { username } = user

    const exists = await this.UserService.getUserByUsername(username);

    if (exists) {
      throw new this.ValidationError('User already exists');
    }

    return await this.UserService.create(user)
  }

  async signIn(user) {
    const { username, password } = user

    const existingUser = await this.UserService.getUserByUsername(username);
    if (!existingUser) {
      throw new this.ValidationError('User not exists', 404);
    }

    const validPassword = existingUser.comparePasswords(password);
    if (!validPassword) {
      throw new this.ValidationError('Invalid password', 400);
    }

    const userToEncode = {
      username: existingUser.username,
      id: existingUser._id
    };

    const token = this.jwtHelper.generateToken(userToEncode);

    return { token, user: userToEncode };
  }
}
