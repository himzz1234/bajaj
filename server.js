const express  = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json());

app.post('/bfhl', (req, res) => {
    const data = req.body.data

    const alphabets = data.filter((item) => item.match(/^[A-Za-z]+$/))
    const numbers = data.filter((item) => item.match(/[0-9]/i))

    const highest = alphabets.sort((a, b) => b.charCodeAt(0) - a.charCodeAt(0))[0];
    const resp = {
        is_success: true,
        user_id: "john_doe_17091999",
        email: "john@xyz.com",
        roll_number: "ABCD123",
        numbers: numbers,
        alphabets: alphabets,
        highest_alphabet: [highest]
    }

    res.status(200).json(resp)
})

app.get('/bfhl', (req, res) => {
  res.status(200).json({operation_code: 1})
})

app.listen('8080', () => {
    console.log('App is running')
})