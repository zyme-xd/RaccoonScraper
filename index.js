const twit = require("twit")
const fs = require("fs")
const path = require("path")
const https = require("https")
require('dotenv').config()
const {
    DownloaderHelper
} = require('node-downloader-helper')

var T = new twit({ // grab api keys from a .env 
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
})

if (consumer_key = process.env.CONSUMER_KEY, consumer_secret = process.env.CONSUMER_SECRET) {
    console.log("Sanity test checked. If returns error, set your API keys and such in a .env file please.")
} else {
    return
}

T.get('search/tweets', {
    q: "@RaccoonEveryHr",
    count: 100
}, function (err, data, response) {
    var i;
    for (i = 0; i < 99; i++) {
        if (!data.statuses[i].extended_entities) {
            console.log("empty")
        } else {
            console.log(data.statuses[i].extended_entities.media[0].media_url)
            var dl = new DownloaderHelper(data.statuses[i].extended_entities.media[0].media_url, './raccoons', {
                override: true
            })
            dl.on('end', () => console.log("downloaded raccoon"))
            dl.start();
        }
    }
})

T.get('search/tweets', {
    q: "@raccoonhourly",
    count: 100
}, function (err, data, response) {
    var i;
    for (i = 0; i < 99; i++) {
        if (!data.statuses[i].extended_entities) {
            console.log("empty")
        } else {
            console.log(data.statuses[i].extended_entities.media[0].media_url)
            var dl = new DownloaderHelper(data.statuses[i].extended_entities.media[0].media_url, './raccoons', {
                override: true
            })
            dl.on('end', () => console.log("downloaded raccoon"))
            dl.start();
        }
    }
})