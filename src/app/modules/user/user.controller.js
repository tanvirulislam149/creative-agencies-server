const User = require("./user.model");

exports.addUser = async (req, res, next) => {
  try {
    const query = User.where({ email: req.body.email });
    const user = await query.findOne();
    if (!user) {
      const result = await User.create(req.body);
      res.send(result);
    } else {
      res.send("User exists.");
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

exports.getUsers = async (req, res, next) => {
  try {
    const result = await User.find({});
    let oldUser = [];
    result.forEach(e => {
      if (e.role !== "admin") {
        oldUser.push(e.email);
      }
    })
    res.send(oldUser);
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
}