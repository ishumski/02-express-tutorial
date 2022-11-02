const express = require('express')
const path = require('path')

const app = express()
const PORT = 5001

//setup middleware for my static elements instead of using readFile as in nodejs
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
})

app.all('*', (req, res) => {
    res.status(404).send('Page not found!')
})

app.listen(PORT, () => {
    console.log(`Server starts on port ${PORT}...`)
})