require('dotenv').config()
const express = require('express')
const app = express();
const PORT = 3009;




app.get("/", (req, res) => {
  res.send('Welcome to the Gitpub App!')
})

app.listen(PORT, () => {
  console.log("Listening on PORT 3009")
})
