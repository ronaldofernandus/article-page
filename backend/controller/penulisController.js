const { User, Posting } = require("../models");

const { encrypt, decrypt } = require("../helpers/bcryptPassword");
const { getJwt, getVerification } = require("../helpers/jwtFile");

class penulisController {
  static async getDataPenulis(req, res) {
    try {
      let getDataPenulis = await User.findAll({});

      res.status(200).json(getDataPenulis);
    } catch (err) {
      res.status(500).json(error);
    }
  }

  static async register(req, res) {
    try {
      const { email, username, password, nama } = req.body;

      let register = await User.create({
        email,
        username,
        password: encrypt(password),
        nama,
      });
      res.status(201).json(register);
    } catch (err) {
      res.status(500).json(error);
    }
  }

  static async login(req, res) {
    try {
      const { username, password } = req.body;
      let login = await User.findOne({
        where: { username },
      });

      if (login) {
        if (decrypt(password, login.password)) {
          let getAccesJwt = getJwt(login);

          res.status(200).json({ getAccesJwt });

          //   let getVerif = getVerification(login);
          //   console.log(getVerif);
        } else {
          res.status(403).json({
            message: "password salah",
          });
        }
      } else {
        res.status(404).json({
          message: "username not found",
        });
      }
    } catch (err) {
      res.status(500).json;
    }
  }

  static async updateDataPenulis(req, res) {
    try {
      const id = +req.params.id;
      const { email, username, password, nama } = req.body;
      let updateDataPenulis = await User.update(
        {
          email,
          username,
          password,
          nama,
        },
        {
          where: { id },
        }
      );

      updateDataPenulis[0] === 1
        ? res.status(200).json({
            message: "data updated",
          })
        : res.status(403).json({
            message: "data not updated",
          });
    } catch (err) {
      res.status(500).json;
    }
  }
  static async deleteDataPenulis(req, res) {
    try {
      const id = +req.params.id;
      let deleteDataPenulis = await User.destroy({
        where: { id },
      });

      deleteDataPenulis === 1
        ? res.status(200).json({
            message: `Data dengan id ${id} sudah di hapus`,
          })
        : res.status(403).json({
            message: `Data dengan id ${id} gagal di hapus`,
          });
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async getDataPenulisById(req, res) {
    try {
      const id = +req.params.id;

      let getDataPenulisById = await User.findByPk(id);

      res.status(200).json(getDataPenulisById);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = penulisController;
