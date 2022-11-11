require('dotenv').config()
const express = require('express')
const app = express();
const PORT = 3009;
const drinks = require("./models/drinks.js");

app.get('/drinks/:id', (req, res) => {
  res.send(req.params.id);
});


app.get('/drinks/', (request, response) => {
  response.render('drinks_index.ejs', {
    allDrinks: drinks
  })
})

app.get("/", (req, res) => {
  res.send('Welcome to the Gitpub App!')
})

app.listen(PORT, () => {
  console.log("Listening on PORT 3009")
})
