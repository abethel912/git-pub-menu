require('dotenv').config()
const express = require('express')
const app = express();
const PORT = 3009;
const drinks = require("./models/drinks.js");
const food = require("./models/food.js");



app.get("/", (request, response) => {
  res.send('Welcome to the Gitpub App!')
})

app.get('/drinks', (request, response) => {
  response.render('drinks_index.ejs', {drinks, food})
  
  })
  app.get('/food', (request, response) => {
    response.render('food_index.ejs', {food})

    })
  


// Show Routes

app.get('/drinks/:id', (request, response) => {
  response.render('drinks_show.ejs', {
    allDrinks: drinks[request.params.id]
  });
});

app.get("/food/:id", (request, response) => {
  response.render("food_show.ejs", {
    allFood: food[request.params.id],
    index:request.params.id
    })
  })

app.listen(PORT, () => {
  console.log("Listening on PORT 3009")
})
