const express = require('express');
const path = require('path');
const moment = require('moment');
const hbs = require('hbs');

//Core modules
const fs = require('fs');


//Custome modules
const requresp = require('./requresp.js')
const PORT = 3000;
var resHeaders;


var tempObj = {
    name: 'Andrew',
    likes: [
        'swimming',
        'fishing',
        4
    ]
};


var app = express();
//var currentYear = moment().format('YYYY');
hbs.registerHelper('getCurrentYear', () => {
    return moment().format('YYYY');
})

hbs.registerHelper('toUpperCaseHelper', (text) => {
    return text.toUpperCase();
})

hbs.registerHelper('getResponseHeaders', () => {
    return resHeaders;

})

hbs.registerHelper('json', JSON.stringify);

hbs.registerPartials(path.join(__dirname, '/views/partials'));

app.use((req, res, next) => {
    var now = new Date().toString();
    var log = `${now}: ${req.method} ${req.url}`;
    console.log(log);
    fs.appendFile('server.log', log + '\n', (err) => {
        if (err) {
            console.log('Unable to append to server.log.')
        }
    })

    next();
});

app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
//app.use(express.static(__dirname + '/public'))

//var responseHeaders = requresp.getResponse();
//var responseHeaders = "Test";
//console.log(responseHeaders);

app.get('/', (req, res) => {
    res.render('home.hbs', {
        pageTitle: 'Home Page',
        welcomeMessage: 'This is the new home page!!!!.'
    });
})

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page'
    });
})

app.get('/request', (req, res) => {
    requresp.getResponse((responseHeaders) => {
        //console.log(`Response header from inside app.get : ${responseHeaders}`);
        //console.log(`\n******${moment().format('MMMM Do YYYY, h:mm:ss a')}**********`)
        resHeaders = responseHeaders;
        res.render('request.hbs', {
            pageTitle: 'Request Page'
                //responseHeaders
        });
    });
})

app.get('/json', (req, res) => {
    res.render('json.hbs', {
        pageTitle: 'Json Page',
        tempObj
    });


})


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}!`)
})
