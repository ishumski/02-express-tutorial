const express = require('express')
const morgan = require('morgan')
const loggerMiddleware = require('./logger.middleware')
const authorizeMiddleware = require('./authorize.middleware')

const app = express()
const PORT = 5001

// app.use([loggerMiddleware, authorizeMiddleware])
app.use(express.static('public'))
app.use(morgan('tiny'))

app.get('/', (req, res) => {
    res.send('Home')
})
app.get('/about', (req, res) => {
    res.send('About')
})
app.get('/product', (req, res) => {
    res.send('Product')
})
app.get('/items', (req, res) => {
    res.send('Items')
})


app.listen(PORT, () => {
    console.log(`Server starts on port ${PORT}...`)
})