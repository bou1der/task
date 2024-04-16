//modules
const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
//modules

//routes
const authorization = require('./src/routes/authorization-router')
//routes

const app = express()

app.use(cors({
    origin:["*"],
    credentials:true,
}))
app.use(cookieParser())

app.use('/api/authorization',authorization)


module.exports = app