const { default: mongoose } = require("mongoose");

var validateEmail = function (email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
};

const OrderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    required: 'Email address is required',
    validate: [validateEmail, 'Please fill a valid email address'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  service: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  fileUrl: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true,
    enum: {
      values: ['pending', 'onGoing', 'done'],
      message: '{VALUE} is not supported'
    }
  }
})

const Orders = mongoose.model("orders", OrderSchema);

module.exports = Orders;