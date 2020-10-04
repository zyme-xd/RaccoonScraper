const twit = require("twit")
const fs = require("fs")
const path = require("path")
const dotenv = require("dotenv")

const T = new Twit({  // grab api keys from a .env 
    consumer_key:         process.env.CONSUMER_KEY,
    consumer_secret:      process.env.CONSUMER_SECRET,
    access_token:         process.env.ACCESS_TOKEN,
    access_token_secret:  process.env.ACCESS_TOKEN_SECRET,
  })