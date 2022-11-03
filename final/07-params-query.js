const express = require('express')
const {products} = require('./data')

const app = express()
const PORT = 5001

app.get('/', (req, res) => {
    res.send('<h1>Home page</h1><a href="/api/products">Show products</a>')
})

app.get('/api/products', (req, res) => {
    const productsInfo = products.map((product) => {
        const {name, id, desc} = product

        return {name, id, desc}
    })
    res.json(productsInfo)
})

app.get('/api/products/:productId', (req, res) => {

    const {productId} = req.params
    const currentProduct = products.filter((product) => product.id === Number(productId))
    if (!currentProduct.length) {
        return res.status(404).send('Not found')
    }
    res.json(currentProduct)
})

app.get('/api/v1/query', (req, res) => {
    const {search, limit} = req.query
    let filteredProducts = [...products]
    if (search) {
        filteredProducts = filteredProducts.filter((product) => product.name.startsWith(search))
    }
    if (limit) {
        filteredProducts = filteredProducts.slice(0, Number(limit))
    }

    res.json(filteredProducts)
})

app.listen(PORT, () => {
    console.log(`Server starts on port ${PORT}...`)
})