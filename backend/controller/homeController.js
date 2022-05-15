const { posting } = require("../models");

class homeController {
  static async getAllHome(req, res) {
    try {
      let getAllHome = await posting.findAll({});
      res.status(200).json(getAllHome);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = homeController;


