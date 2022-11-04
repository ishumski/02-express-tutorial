const express = require('express')
const {getPeople, createPerson, updatePerson, deletePerson} = require('../controllers/people.controller')

const router = express.Router()

router.get('/', getPeople)
router.post('/', createPerson)
router.put('/:id', updatePerson)
router.delete('/:id', deletePerson)


// the same as above
// router.route('/').get(getPeople).post(createPerson)
// router.route('/:id').put(updatePerson).delete(deletePerson)

module.exports = router