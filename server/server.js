const express = require('express')

const app = express()

const PORT = process.env.PORT || 8000


app.use(express.json())


app.get('/', (req, res) => {
    res.send('nigga backend')
})

app.use('/api/users', require('./routes/userRoutes') )

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
})