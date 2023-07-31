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

exports.getAllOrdersController = async (req, res, next) => {
  try {
    const result = await Orders.find({});
    res.send(result);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

exports.updateOrderStatusController = async (req, res, next) => {
  try {
    const result = await Orders.findByIdAndUpdate(req.body._id, { status: req.body.status });
    res.send(result);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}