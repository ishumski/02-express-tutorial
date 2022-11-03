const express = require('express')
const {people} = require('./data')

const PORT = 5001
const app = express()

app.use(express.static('methods-public'))

//parse form data
app.use(express.urlencoded({extended: false}))

app.use(express.json())

app.get('/api/people', (req, res) => {
    res
        .status(200)
        .send(
            {
                success: true,
                data: people
            })
})

app.post('/api/people', (req, res) => {
    const {name} = req.body
   if(!name){
       return res.status(400).json({success: false, msg:'Please, provide name value'})
   }
   res.status(201).json({success: true, person: name})
})

app.post('/login', (req, res) => {
    const {name} = req.body
    if (name) {
        res.status(200).send(`Welcome, ${name}`)
    }
    res.status(401).send('Enter your name')
})

app.listen(PORT, () => {
    console.log(`Server starts on port ${PORT}...`)
})