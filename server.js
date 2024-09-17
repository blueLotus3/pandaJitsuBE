require('dotenv').config()
const {PORT, NODE_ENV = "development"} = process.env
const mongoose = require('./db/connection')
const cors = require('cors')
const corsOptions = require('./configs/cors.js')
const express = require('express')
const app = express()
const morgan = require('morgan')


NODE_ENV === 'production' ? app.use(cors(corsOptions)) : app.use(cors())
app.use(express.json())
app.use(morgan('tiny'))

const GearRouter = require('./controllers/Gear')
app.use('/gears', GearRouter)

app.listen(PORT, () => {
  console.log(`You are listening on port ${PORT}!`)
})

