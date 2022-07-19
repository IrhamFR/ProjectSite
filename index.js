// express package command
const express = require('express')

// using express package
const app = express()

// set template engine
app.set('view engine', 'hbs');

// static folder (public)
app.use('/public', express.static('public'))

app.get('/', function (req, res) {
    res.render('index')
})

app.get('/myblog', function (req, res) {
    res.render('myblog')
})

app.get('/myblog-detail', function (req, res) {
    res.render('myblog-detail')
})

app.get('/contact-me', function (req, res) {
    res.render('contact-me')
})

const port = 5500
app.listen(port, function () {
    console.log(`Server running on port : ${port}`);
})