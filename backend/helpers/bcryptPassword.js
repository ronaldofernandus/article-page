const bcrypt = require("bcrypt");

const saltRounds = 10;

const encrypt = (data) => {
  return bcrypt.hashSync(data, saltRounds);
};

const decrypt = (data, bcryptPassword) => {
  return bcrypt.compareSync(data, bcryptPassword);
};

module.exports = { encrypt,decrypt };
