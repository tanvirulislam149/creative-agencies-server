const Orders = require("./order.model");

exports.addOrderController = async (req, res, next) => {
  try {
    const result = await Orders.create(req.body);
    res.send(result);
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
}

exports.getMyOrdersController = async (req, res, next) => {
  try {
    const result = await Orders.find(req.query);
    res.send(result);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}