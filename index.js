var express = require('express')
var app = express();
var bodyParse = require('body-parse')
var request = require('request')

app.use(bodyParse.json())


app.listen(80, function () {
    console.log('Server started. Listen on port 80');
});

app.get('/', function (req,res) {
    res.send('Hello, World;')
});