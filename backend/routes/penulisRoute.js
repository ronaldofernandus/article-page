const penulisRoute = require("express").Router();

const penulisController = require("../controller/penulisController");

penulisRoute.get("/", penulisController.getDataPenulis);
penulisRoute.post("/register", penulisController.register);
penulisRoute.post("/login", penulisController.login);
penulisRoute.put("/:id", penulisController.updateDataPenulis);
penulisRoute.delete("/:id", penulisController.deleteDataPenulis);

penulisRoute.get("/account/:id", penulisController.getDataPenulisById);

module.exports = penulisRoute;
