const env = require('dotenv').config();
const path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const cors = require('cors');
const app = express()
const aylien = require('aylien_textapi');
const textapi = new aylien({
    application_id: "d27ade7b",
    application_key: "9d8fd45a81874c6b43efff172e1b2142"
});

app.use(express.static('dist'))
app.use(cors());

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
    console.log(process.env.API_ID)
})

app.get('/test', function (req, res) {
    textapi.sentiment({'text': 'John is a very good football player'}, function(err, result, rateLimits) {
            console.log(rateLimits);
        });
    res.send(mockAPIResponse)
})

