const express = require("express");
const people = require("./people.json");

// app
const app = express();

// This tells express that we are using pug as our template engine.
app.set('view engine', 'pug');

// serve static content from `public` folder
app.use(express.static(__dirname + '/public'));

// get route
app.get('/', (req, res) => {
  res.render('index', {
    title: "First website in Node!",
    people: people.profiles
  });
});

app.get('/profile', (req,res) => {
  const person = people.profiles.find(p => p.id == req.query.id);
  res.render('profile', {
    title: `About ${person.firstname} ${person.lastname}`,
    person,
  });
});

// server
const server = app.listen(7000, () => {
  console.log(`express running on port ${server.address().port}`);
});
