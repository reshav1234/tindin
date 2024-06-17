const { Pool } = require('pg')
require('dotenv').config()

const pool = new Pool({
  user: process.env.USER_NAME,
  host: process.env.HOST_NAME,
  database: process.env.DB_NAME,
  password:  process.env.DB_PASSWORD,
  dialect: process.env.DIALECT,
  port: process.env.PORT_NUMBER,
  
})

const connectDB = async () => {
  pool.connect((err, client, release) => {
    if(err){
        return console.error(
            'Error in connection', err.stack
        )
    }
    client.query('SELECT NOW()', (err, result)=>{
        release()
        if(err){
            return console.error(
                'Error executing query', err.stack
            )
        }
        console.log("Connected to Database.")
    })
})
}

module.exports = connectDB
