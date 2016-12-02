const express = require('express');
const path = require('path');
const moment = require('moment');
const hbs = require('hbs');

//Custome modules
const requresp = require('./requresp.js')
const PORT = 3000;
var responseHeaders;





var app = express();
//var currentYear = moment().format('YYYY');
hbs.registerHelper('getCurrentYear', ()=> {
  return moment().format('YYYY');
})

hbs.registerHelper('toUpperCaseHelper', (text)=> {
  return text.toUpperCase();
})

// hbs.registerHelper('getResponseHeaders', ()=> {
//   return requresp.getResponse();
// })

hbs.registerPartials(path.join(__dirname, '/views/partials'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
//app.use(express.static(__dirname + '/public'))

//var responseHeaders = requresp.getResponse();
//var responseHeaders = "Test";
//console.log(responseHeaders);

app.get('/', (req,res) => {
  res.render('home.hbs', {
    pageTitle: 'Home Page',
    welcomeMessage: 'This is the new home page!!!!.'
  });
})

app.get('/about', (req,res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page'
  });
})

app.get('/request', (req,res) => {
  res.render('request.hbs', {
    pageTitle: 'Request Page'
    //responseHeaders
  });
})

app.get('/json', (req,res) => {
  res.send({
    name: 'Andrew',
    likes: [
      'swimming',
      'fishing',
      4
    ]
  })
})


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`)
})
