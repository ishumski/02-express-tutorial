const express = require('express')
const app = express()
const port = 5001

app.get('/', (req, res) => {
    res.send('Home page!')
})
app.get('/about', (req, res) => {
    res.send('About page!')
})
app.all('*', (req, res) => {
    res.status(404).send('Page not found!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})