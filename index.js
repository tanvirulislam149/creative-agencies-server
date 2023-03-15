const express = require('express')
require('dotenv').config()
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
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

    app.get('/', (req, res) => {
      res.send('Hello World from backend!')
    })

    app.get("/courses", async (req, res) => {
      const query = {};
      const cursor = coursesCollection.find(query);
      const result = await cursor.toArray();
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