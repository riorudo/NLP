const env = require('dotenv').config();
const path = require('path')
const express = require('express')
const axios = require('express')
const mockAPIResponse = require('./mockAPI.js')
const cors = require('cors');
const app = express()
const aylien = require('aylien_textapi');
const textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

app.use(express.static('../../dist'))
app.use(cors());

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.post('/sentiment', async function (req, res) {
    const searchParam = {
        language: 'en'
    }
    if (req.body.text) {
        searchParam.text = req.body.text;
    } else {
        searchParam.url = req.body.url;
    }
    textapi.entities(searchParam, function (err, result, rateLimits) {
        if (result && rateLimits) {
            res.send(result);
        } else {
            res.send(mockAPIResponse);
        }
    });
})

