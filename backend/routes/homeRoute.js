const homeRoute = require("express").Router();

const homeController = require("../controller/homeController");

homeRoute.get("/", homeController.getAllHome);

module.exports = homeRoute;



