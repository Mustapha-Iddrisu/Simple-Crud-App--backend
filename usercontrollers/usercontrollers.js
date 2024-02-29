const User = require("../models/model");
exports.getUser = async (req, res) => {
  let users = await User.find({});
  res.json({ count: users.length, users });
};

exports.postUser = async (req, res) => {
  // console.log(req.body)
  try {
    let userExists = await User.findOne({ email: req.body.email });
    if (userExists) {
      res.json("Email already exist");
    } else {
      let newUser = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
      res.json(newUser);
    }
  } catch (error) {
    res.json({ error });
  }
};

//Searching by id

exports.getById = async (req, res) => {
  let id = req.body.id;
  let user = await User.findById(id);

  if (user) {
    res.json({ name: user.name, email: user.email });
  } else {
    res.send("User not found");
  }
};

//Updating our data

exports.putUser = async (req, res) => {
  try {
    let { name, password } = req.body;
    let id = req.params.id;
    let result = await User.findByIdAndUpdate(
      { _id: id },
      {
        name: name,
        password: password,
      }
    );
    if (result) {
      res.json(result);
    }
    res.json({ message: "Data not found" });
  } catch (error) {
    res.json(error);
  }
};

exports.deleteUser = async (req, res) => {
  try {
    var { id } = req.params;
    var result = await User.findByIdAndDelete({ _id: id });
    if (!result) {
      res.json({ message: "User not found" });
    }
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.json(error.message);
  }
};
