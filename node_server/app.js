const express = require("express") ;
const pool = require('./config/db')
const app = express()
const port = process.env.PORT || 5200