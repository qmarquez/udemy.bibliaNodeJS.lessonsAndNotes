module.exports = class AuthController {
  constructor({ AuthService }) {
    this.AuthService = AuthService;
  }

  signUp = async (req, res) => {
    const { body } = req;
    const createdUser = await this.AuthService.signUp(body);
    return res.status(201).send(createdUser)
  }
  signIn = async (req, res) => {
    const { body } = req;
    const creds = await this.AuthService.signIn(body);
    return res.status(201).send(creds)
  }
}