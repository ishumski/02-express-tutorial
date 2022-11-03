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
    if (!name) {
        return res.status(400).json({success: false, msg: 'Please, provide name value'})
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

app.put('/api/people/:id', (req, res) => {
    const {id} = req.params
    const {name} = req.body
    const person = people.find((person) => person.id === Number(id))
    if (!person) {
        return res
            .status(404)
            .json({success: false, msg: `No person with id ${id}`})
    }
    const newPeople = people.map((person)=>{
        if(person.id === Number(id)){
            person.name = name
        }
        return person
    })
    res.status(201).json({success: true, data: newPeople})
})

app.delete('/api/people/:id', (req, res)=>{
    const {id} = req.params
    const filteredPeople = people.filter((person)=> person.id !== Number(id))
    console.log(id)
    res.status(201).json({success: true, data: filteredPeople})
})

app.listen(PORT, () => {
    console.log(`Server starts on port ${PORT}...`)
})