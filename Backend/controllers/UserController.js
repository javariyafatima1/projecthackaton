const User = require("../models/user");
var bcrypt = require("bcryptjs");
var jwt = require('jsonwebtoken');

const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);
  const result = await User.create({
    name,
    email,
    password: hashPassword,
  });
  res.send({ status: 200, data: result });
};
const getUser = async (req, res) => {
  const result = await User.find();
  res.send({ status: 200, data: result });
};
const login = async (req, res) => {
  console.log("iminlogin")
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    res.send({ status: 404, data: "no user is found" });
  }
  bcrypt.compare(password, user.password, async function (err, resp) {
    console.log(resp)
    if (resp) {
      // logic
      const obj = {
        id: user._id,
        email: user.email, 
        name: user.name
      }
      const token = await jwt.sign(obj, process.env.JWT_SECRET)
      console.log("token", token)
  
      res.send({ status: 200, data: token, message: "user logged in" });
    } else {
      res.send({ status: 400, message: "user pass incorrect" });
    }
  });
};

module.exports = {
  createUser,
  getUser,
  login
};
