require('dotenv').config()
const express = require('express')
const app = express();
const PORT = 3009;
const drinks = require("./models/drinks.js");


app.get("/", (req, res) => {
  res.send('Welcome to the Gitpub App!')
})

app.get('/drinks/', (request, response) => {
  response.render('drinks_index.ejs', {
    allDrinks: drinks
  })
})

app.get('/drinks/:id', (request, response) => {
  response.render('drinks_show.ejs', {
  allDrinks:drinks[request.params.id]
  })
})

app.listen(PORT, () => {
  console.log("Listening on PORT 3009")
})
