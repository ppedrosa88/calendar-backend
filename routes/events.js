/*
    Event Routes
    /api/events
*/
const { Router } = require('express')
const { check } = require('express-validator')

const { isDate } = require('../helpers/isDate')
const { fieldsValidator } = require('../middlewares/fields-validator')
const { validateJWT } = require('../middlewares/jwt-validator')
const { getEvents, createEvent, updateEvent, deleteEvent  } = require('../controllers/events')


const router = Router()

router.use( validateJWT )

router.get('/', getEvents )

router.post(
    '/',
    [
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'Fecha de inicio es obligatoria').custom( isDate ),
        check('end', 'Fecha de finalizacion es obligatoria').custom( isDate ),
        fieldsValidator
    ],
    createEvent 
)

router.put('/:id',
    [
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'Fecha de inicio es obligatoria').custom( isDate ),
        check('end', 'Fecha de finalizacion es obligatoria').custom( isDate ),
        fieldsValidator
    ], 
    updateEvent 
)

router.delete('/:id', deleteEvent )

module.exports = router