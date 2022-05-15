const indexRoute = require("express").Router();

indexRoute.get("/", (req, res) => {
  res.status(200).json({
    message: "Article Sport",
  });
});

const homeRoute = require("./homeRoute");
indexRoute.use("/home", homeRoute);

const penulisRoute = require("./penulisRoute");
indexRoute.use("/penulis", penulisRoute);

const postingRoute = require("./postingRoute");
indexRoute.use("/posting", postingRoute);

module.exports = indexRoute;
