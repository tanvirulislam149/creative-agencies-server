const mongoose = require('mongoose');
const express = require("express");
var cors = require('cors')
require('dotenv').config()
const app = express();
const PORT = process.env.PORT || 5000;
const coursesRoute = require("./src/app/modules/courses/courses.route");
const userRoute = require("./src/app/modules/user/user.route");
const orderRoute = require("./src/app/modules/Orders/order.route")


// middleware
app.use(express.json());
app.use(cors())

async function main() {
  const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.xqlsxpn.mongodb.net/creative-agencies?retryWrites=true&w=majority`;
  await mongoose.connect(uri,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  console.log("db connected");
}

main();

// Routes
app.use("/course", coursesRoute)
app.use("/user", userRoute);
app.use("/order", orderRoute);


// testing...
app.get('/', (req, res) => {
  res.send('Hello World from mongoose!')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})

