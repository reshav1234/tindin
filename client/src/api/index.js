import axios from "axios";

export const addCard = async (cardGroupData) => {
  try {
    const res = await axios.post('http://localhost:8000/cards', cardGroupData)
    return res.data
  } catch (err) {
    console.log('Error adding image', err)
    throw err
  }
}

export const getCards = async () => {
  try {
    const res = await axios.get('http://localhost:8000/cards')
    return res.data
  } catch (err) {
    console.error("Error fetching image", err)
    throw err
  }
}
