const postingRoute = require("express").Router();
const postingController = require("../controller/postingController");

const authentication = require("../middleware/token");

// const upload = require("../middleware/multer");

postingRoute.get("/", postingController.getAllPosting);
postingRoute.post("/", authentication, postingController.createPosting);
postingRoute.put("/:id", postingController.updatePosting);
postingRoute.delete("/:id", postingController.deletePosting);

module.exports = postingRoute;
