const express = require('express')
require('dotenv').config()
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express()
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.xqlsxpn.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run() {
  try {
    const coursesCollection = client.db("creative-agencies").collection("courses");
    const productsCollection = client.db("creative-agencies").collection("products");
    const userCollection = client.db("creative-agencies").collection("user");

    app.get('/', (req, res) => {
      res.send('Hello World from backend!')
    })

    app.get("/courses", async (req, res) => {
      const query = {};
      const cursor = coursesCollection.find(query);
      const result = await cursor.toArray();
      res.send(result);
    })

    app.get("/courses/:id", async (req, res) => {
      const { id } = req.params;
      const query = { _id: new ObjectId(id) }
      const cursor = await coursesCollection.findOne(query);
      res.send(cursor);
    })

    app.post("/addProduct", async (req, res) => {
      const { title, course_name, description, short_details, details, requirements, language, author, duration, project, price, students, picture, icon, video_link } = req.body;
      const course = { title, course_name, description, short_details, details, requirements, language, author, duration, project, price, students, picture, icon };
      const result = await coursesCollection.insertOne(course);
      const insertedId = `${result.insertedId}`;
      const product = { productId: insertedId, video_link, course_name }
      const productAddResult = await productsCollection.insertOne(product);
      res.send(productAddResult);
    })

    app.post("/addUser", async (req, res) => {
      const data = req.body;
      const query = { email: data.email };
      const userExist = await userCollection.findOne(query);
      if (!userExist) {
        const addUser = await userCollection.insertOne(data);
        res.send(addUser);
      }
      else {
        res.send("user already exists")
      }
    })

    app.get("/users", async (req, res) => {
      const query = {};
      const cursor = userCollection.find(query);
      const result = await cursor.toArray();
      const oldUser = [];
      result.forEach(e => {
        if (e.role !== "admin") {
          oldUser.push(e.email);
        }
      })
      res.send(oldUser);
    })

    app.patch("/makeAdmin", async (req, res) => {
      const filter = req.body;
      const updateDoc = {
        $set: {
          role: "admin"
        }
      }
      const result = await userCollection.updateOne(filter, updateDoc);
      res.send(result);
    })




  } finally {
    // await client.close();
  }
}
run().catch(console.dir);








app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})