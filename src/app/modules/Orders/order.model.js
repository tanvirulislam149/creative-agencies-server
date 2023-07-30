const { default: mongoose } = require("mongoose");

const OrderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: 'Email address is required',
    validate: [validateEmail, 'Please fill a valid email address'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  service: {           // ---------------------- Need editing
    type: String,
    required: true,
    enum: {
      values: ['pending', 'onGoing', 'done'],
      message: '{VALUE} is not supported'
    }
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  fileUrl: {
    type: String,
    required: true
  }
})

const Orders = mongoose.model("orders", OrderSchema);

module.exports = Orders;