let homeService;

class HomeController {

  constructor({ HomeService }) {
    homeService = HomeService
  }

  index() {
    const [, res] = arguments;
    return res.send(homeService.index());
  }
}

module.exports = HomeController;