const express = require('express')
const port = 5000

const connectDB = require('./db')

const app = express()
app.use(express.json())

connectDB()
//routes
app.get('/', async (req, res) => {
    try {
        const data = await pool.query('SELECT * FROM new')
        res.status(200).send(data.rows)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})


app.listen(port, () => console.log(`Server has started on port: ${port}`))