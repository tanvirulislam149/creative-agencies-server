// const express = require('express')
// require('dotenv').config()
// const cors = require('cors');
// const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
// const app = express()
// const port = process.env.PORT || 5000;

// // middleware
// app.use(cors());
// app.use(express.json());


// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.xqlsxpn.mongodb.net/?retryWrites=true&w=majority`;
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// async function run() {
//   try {
//     const coursesCollection = client.db("creative-agencies").collection("courses");
//     const userCollection = client.db("creative-agencies").collection("user");

//     app.get('/', (req, res) => {
//       res.send('Hello World from backend!')
//     })

//     app.get("/courses", async (req, res) => {
//       const query = {};
//       const cursor = coursesCollection.find(query);
//       const result = await cursor.toArray();
//       res.send(result);
//     })

//     app.get("/courses/:id", async (req, res) => {
//       const { id } = req.params;
//       const query = { _id: new ObjectId(id) }
//       const cursor = await coursesCollection.findOne(query);
//       res.send(cursor);
//     })

//     app.post("/addProduct", async (req, res) => {
//       const result = await coursesCollection.insertOne(req.body);
//       res.send(result);
//     })






//     app.post("/addUser", async (req, res) => {
//       const data = req.body;
//       const query = { email: data.email };
//       const userExist = await userCollection.findOne(query);
//       if (!userExist) {
//         const addUser = await userCollection.insertOne(data);
//         res.send(addUser);
//       }
//       else {
//         res.send("user already exists")
//       }
//     })

//     app.get("/users", async (req, res) => {
//       const query = {};
//       const cursor = userCollection.find(query);
//       const result = await cursor.toArray();
//       const oldUser = [];
//       result.forEach(e => {
//         if (e.role !== "admin") {
//           oldUser.push(e.email);
//         }
//       })
//       res.send(oldUser);
//     })

//     app.get("/isAdmin", async (req, res) => {
//       const query = req.query;
//       const result = await userCollection.findOne(query);
//       if (result.role === "admin") {
//         res.send(true);
//       }
//       else {
//         res.send(false);
//       }
//     })

//     app.patch("/makeAdmin", async (req, res) => {
//       const filter = req.body;
//       const updateDoc = {
//         $set: {
//           role: "admin"
//         }
//       }
//       const result = await userCollection.updateOne(filter, updateDoc);
//       res.send(result);
//     })




//   } finally {
//     // await client.close();
//   }
// }
// run().catch(console.dir);








// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })


const mongoose = require('mongoose');
const express = require("express");
var cors = require('cors')
require('dotenv').config()
const app = express();
const PORT = process.env.PORT || 5000;
const coursesRoute = require("./src/app/modules/courses/courses.route");
const userRoute = require("./src/app/modules/user/user.route");


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

app.get('/', (req, res) => {
  res.send('Hello World from mongoose!')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})

