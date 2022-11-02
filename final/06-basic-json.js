const express = require('express')
const { products } = require('./data')

const app = express()
const PORT = 5001

app.get('/', (req, res) => {
    res.send('<h1>Home page</h1><a href="/api/products">Show products</a>')
})

app.get('/api/products', (req, res)=>{
    const productsInfo = products.map((product)=>{
        const { name, id, desc } = product

        return { name, id, desc }
    })
    res.json(productsInfo)
})

app.listen(PORT, () => {
    console.log(`Server starts on port ${PORT}...`)
})