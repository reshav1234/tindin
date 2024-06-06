const express = require('express')
const port = 8000

const pool = require('./db')

const app = express()
app.use(express.json())

app.get('/', async (req, res) => {
  try {
    const data = await pool.query("SELECT * FROM schools")
    res.status(200).send(data.rows)
  } catch (err) {
    console.log(err)
    res.sendStatus(500)
  }
})

app.post('/post', async (req, res) => {
  const { name, location } = res.body
  try {
    await pool.query('INSERT INTO schools (name, class) VALUES($1, $2)', [name, location])
    res.send(200).send({ message: "Successfully added values" })
  } catch (err) {
    console.log(err)
    res.sendStatus(500)
  }
})

app.listen(port, () => console.log(`connection in port ${port}`))
