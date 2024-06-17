
require('dotenv').config();

const express = require('express');
const cors = require('cors')
const { Sequelize, DataTypes } = require('sequelize');

console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASS:', process.env.DB_PASS);
console.log('DB_NAME:', process.env.DB_NAME);
console.log('DB_PORT:', process.env.DB_PORT);

const app = express();
const port = 8000;
app.use(cors({
  origin: 'http://localhost:5173'
}))

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
  port: process.env.DB_PORT,
});

const BusinessCard = sequelize.define('BusinessCard', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  image1: DataTypes.STRING,
  image2: DataTypes.STRING,
  image3: DataTypes.STRING,
  image4: DataTypes.STRING,
  image5: DataTypes.STRING,
  image6: DataTypes.STRING,
  image7: DataTypes.STRING,
  image8: DataTypes.STRING,
}, {
  tableName: 'BusinessCard'
});

sequelize.sync()



app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post('/cards', async (req, res) => {
  try {
    const { imageURL } = req.body;
    const card = await BusinessCard.create({
      image1: imageURL[0],
      image2: imageURL[1],
      image3: imageURL[2],
      image4: imageURL[3],
      image5: imageURL[4],
      image6: imageURL[5],
      image7: imageURL[6],
      image8: imageURL[7],
    });
    res.status(201).json(card);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/cards', async (req, res) => {
  try {
    const cards = await BusinessCard.findAll()
    res.json(cards)
  } catch (err) {
    res.status(500).json({ err: err.message })
  }
})


app.listen(port, async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log('Database connected!');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  console.log(`Server running at http://localhost:${port}`);
});
