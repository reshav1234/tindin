const express = require('express')
const app = express()
const PORT = process.env.PORT || 8000
require('dotenv').config();
const colors = require('colors')
const cors = require('cors')

const connectDB = require('./config/db')
const userRoutes = require('./routes/userRoutes')


connectDB()
app.use(express.json())
app.use(cors())


app.use('/auth', userRoutes)


app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`.blue)
})