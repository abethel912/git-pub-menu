require('dotenv').config()
const express = require('express')
const app = express();
const PORT = 3009;
const drinks = require("./models/drinks.js");


app.get('/drinks', (req, res) => {
  res.render("drinks_index.ejs",)
})

app.get("/", (req, res) => {
  res.send('Welcome to the Gitpub App!')
})

app.listen(PORT, () => {
  console.log("Listening on PORT 3009")
})
