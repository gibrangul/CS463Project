<<<<<<< HEAD
const express = require("express")
const bodyParser = require("body-parser")
const cors = require('cors')


const port = 3001
const app = express()

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send({
    message: "Hello World"
  })
})

app.listen(port, () => {
  console.log(`Server up on port ${port}`)
})

=======
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const routes = require('./routes');

const MONGODB_URI =
  'mongodb+srv://CS463_Project:root@cluster1-gnypk.mongodb.net/inventory?retryWrites=true&w=majority';

const port = 3001;
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(bodyParser.json());
app.use(routes);

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log('Succesfully connected to database');
    app.listen(port, () => {
      console.log(`Server up on port ${port}`);
    });
  })
  .catch((err) => {
    console.log('Error connecting to database', err);
  });
>>>>>>> 87a3f6ce74dfc0e8b1c5c8232175691ca7c29a52
