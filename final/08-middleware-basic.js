const express = require('express')

const app = express()
const PORT = 5001

const loggerMiddleware = (req, res, next)=>{
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log({method, url, time})
    next()
}

app.get('/', loggerMiddleware, (req, res)=>{
    res.send('Home')
})
app.get('/about',loggerMiddleware, (req, res)=>{
    res.send('About')
})


app.listen(PORT, () => {
    console.log(`Server starts on port ${PORT}...`)
})