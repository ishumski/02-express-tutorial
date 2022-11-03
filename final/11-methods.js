const express = require('express')
const {people} = require('./data')

const PORT = 5001
const app = express()

app.get('/api/people', (req, res) => {
    res
        .status(200)
        .send(
            {
                success: true,
                data: people
            })
})

app.listen(PORT, () => {
    console.log(`Server starts on port ${PORT}...`)
})