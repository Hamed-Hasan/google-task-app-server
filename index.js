const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://googleTask:ZxFsVBnFcteTusgU@cluster0.jxqey.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
      await client.connect();
   

    } finally {
  
    }
  }
  run().catch(console.dir);

  app.get('/', (req, res) => {
    res.send('Hello world Google Task App')
  })

  app.listen(port, () => {
    console.log('Develop GoogleTask App')
  })