const {people} = require("../data");
const getPeople = (req, res) => {
    res.status(200).send({success: true, data: people})
}

const createPerson = (req, res) => {
    const {name} = req.body
    if (!name) {
        return res.status(400).json({success: false, msg: 'Please, provide name value'})
    }
    res.status(201).json({success: true, person: name})
}

const updatePerson = (req, res) => {
    const {id} = req.params
    const {name} = req.body
    const person = people.find((person) => person.id === Number(id))
    if (!person) {
        return res
            .status(404)
            .json({success: false, msg: `No person with id ${id}`})
    }
    const newPeople = people.map((person) => {
        if (person.id === Number(id)) {
            person.name = name
        }
        return person
    })
    res.status(201).json({success: true, data: newPeople})
}

const deletePerson = (req, res) => {
    const {id} = req.params
    const filteredPeople = people.filter((person) => person.id !== Number(id))
    console.log(id)
    res.status(201).json({success: true, data: filteredPeople})
}

module.exports = {getPeople, createPerson, updatePerson, deletePerson}