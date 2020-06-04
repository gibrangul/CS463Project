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

