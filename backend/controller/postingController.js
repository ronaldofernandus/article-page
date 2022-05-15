const { Posting, User } = require("../models");
const { getVerification } = require("../helpers/jwtFile");

class postingController {
  static async getAllPosting(req, res) {
    try {
      let getAllPosting = await Posting.findAll({
        include: [User],
      });

      res.status(200).json(getAllPosting);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async createPosting(req, res) {
    try {
      const { image, title, content } = req.body;

      const UserId = +req.userData.id;

      let createPosting = await Posting.create({
        image,
        title,
        content,
        UserId,
      });
      res.status(201).json(createPosting);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async updatePosting(req, res) {
    try {
      const id = +req.params.id;
      const { image, title, content } = req.body;
      let updatePosting = await Posting.update(
        {
          image,
          title,
          content,
        },
        {
          where: { id },
        }
      );
      res.status(200).json(updatePosting);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async deletePosting(req, res) {
    try {
      const id = +req.params.id;

      let deletePosting = await Posting.destroy({
        where: { id },
      });
      res.status(200).json(deletePosting);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
module.exports = postingController;

//
