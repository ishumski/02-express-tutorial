const express = require('express')
const peopleRouter = require('./routes/people')
const authRouter = require('./routes/auth')

const PORT = 5001
const app = express()

app.use(express.static('methods-public'))

//parse form data
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use('/api/people', peopleRouter)
app.use('/', authRouter)

app.listen(PORT, () => {
    console.log(`Server starts on port ${PORT}...`)
})