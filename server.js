const express  = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json());


app.get('/', (req, res) => {
    res.send('api is running')
})

app.post('/bfhl', (req, res) => {
    const data = req.body.data

    if (data){
        try {
            const alphabets = data.filter((item) => item.match(/^[A-Za-z]+$/)) || []
            const numbers = data.filter((item) => item.match(/[0-9]/i)) || []
        
            const highest = alphabets.sort((a, b) => b.charCodeAt(0) - a.charCodeAt(0))[0] || [];
            const resp = {
                is_success: true,
                user_id: "hm1624",
                email: "hm1624@srmist.edu.in",
                roll_number: "RA2011043020048",
                numbers: numbers,
                alphabets: alphabets,
                highest_alphabet: [highest]
            }
        
            res.status(200).json(resp)
        } catch (error) {
            res.status(404).json({error: error.message})
        }
    } else {
        res.status(404).json({error: "Not a valid data"})
    }

})

app.get('/bfhl', (req, res) => {
  res.status(200).json({operation_code: 1})
})

app.listen('8080', () => {
    console.log('App is running')
})