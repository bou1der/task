//modules
const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const dotenv = require('dotenv')
//modules

//routes
const authorization = require('./src/routes/authorization-router')
//routes


dotenv.config()

const app = express()

app.use(cors({
    origin:"http://localhost:3000",
    credentials:true,
}))
app.use(cookieParser())

app.use('/api/authorization',authorization)


module.exports = app