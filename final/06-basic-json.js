const express = require('express')
const { products } = require('./data')

const app = express()
const PORT = 5001

app.get('/', (req, res) => {
    // res.json(
    //     [
    //         {name: "ilia"},
    //         {name: "susan"},
    //         {name: "john"}
    //     ]
    // )
    res.json(products)
})

app.listen(PORT, () => {
    console.log(`Server starts on port ${PORT}...`)
})