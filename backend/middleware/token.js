const { getVerification } = require("../helpers/jwtFile");


const authentication = (req, res, next) => {
  console.log("Start auth");
  const getAccesJwt = req.headers.getaccesjwt;
  if (getAccesJwt) {
    console.log("token ada");
    try {
      let Verification = getVerification(getAccesJwt);
      req.userData = Verification;
      next();
    } catch (err) {
      res.status(401).json(err);
    }
  } else {
    res.status(401).json({ message: " token not found" });
  }
  next();
};

module.exports = authentication;
