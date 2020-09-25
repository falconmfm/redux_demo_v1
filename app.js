var express = require('express')
var app = express();
var bodyParse = require('body-parser')
var request = require('request')


var DESTINATION_VERIFICATION_TOKEN = 'abcd1234'

app.use(bodyParse.json())

app.get('/', function (req,res) {
    res.send('Hello, World;')
});

app.get('/destination', function (req, res) {
    if (req.headers['verification-token'] === DESTINATION_VERIFICATION_TOKEN) {
        console.log('verification-token match :) ');
        return res.send(req.query.challenge);
    }
    console.log('verification-token did not match :( ');
    res.sendStatus('400');
});

app.post('/destination', function (req, res) {
    console.log(req.body);
    res.sendStatus('200');
});

module.exports = app; 