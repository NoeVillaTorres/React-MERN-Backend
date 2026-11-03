const express = require('express')

const {check} = require('express-validator')
const {validarJWT} = require('../middlewares/validar-jwt')

const router = express.Router()

const {crearUsuario, loginUsuario, revalidarToken} = require('../controllers/auth')
const { validarCampos } = require('../middlewares/validar-campos')





router.post(
    '/new',
    [
        check('name', 'el nombre es obligatorio').not().isEmpty(),
        check('email', 'el email es obligatorio').isEmail(),
        check('password', 'el password es obligatorio y debe ser mayor a 6 caracteres').isLength({min: 6, max:20}),
        validarCampos

        
    ],
    crearUsuario )


router.post(
    '/',
    [
        check('email', 'el email es obligatorio').isEmail(),
        check('password', 'el password es obligatorio y debe ser mayor a 6 caracteres').isLength({min: 6, max:20}),
        validarCampos

    ],
    loginUsuario )



router.get('/renew', validarJWT, revalidarToken )




module.exports = router