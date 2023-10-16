/*
    Users / Auth Rutes
    host + /api/auth
*/
const { Router } = require('express')
const { check } = require('express-validator')
const { fieldsValidator } = require('../middlewares/fields-validator')
const { createUser, loginUser, validateToken  } = require('../controllers/auth')
const { validateJWT } = require('../middlewares/jwt-validator')

const router = Router()

router.post(
    '/new', 
    [  
        check('name','El nombre es obligatorio').not().isEmpty(),
        check('email','El email es obligatorio').isEmail(),
        check('password','El password debe de ser de 6 caracteres').isLength({ min: 6 }),
        fieldsValidator
    ], 
    createUser 
)

router.post(
    '/',
    [
        check('email','El email es obligatorio').isEmail(),
        check('password','El password debe de ser de 6 caracteres').isLength({ min: 6 }),
        fieldsValidator
    ], 
    loginUser 
)

router.get('/renew', validateJWT, validateToken )

module.exports = router