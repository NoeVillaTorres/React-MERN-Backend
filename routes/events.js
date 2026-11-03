// Obtener eventos
const {Router} = require('express')
const {check} = require('express-validator')
const {validarCampos} = require('../middlewares/validar-campos')
const {validarJWT} = require('../middlewares/validar-jwt')
const {getEventos, crearEvento, actualizarEvento, eliminarEvento} = require('../controllers/events')
const { isDate } = require('../helpers/isDate')

const router = Router()

router.use(validarJWT)


router.get('/', getEventos)

// Crear eventos

router.post(
    '/',
    [
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'Fecha de inicio obligatoria').custom(isDate),
        check('end', 'Fecha de finalización obligatoria').custom(isDate),
        validarCampos

    ],
    crearEvento
)


// Atualizar evento
router.put('/:id', actualizarEvento)

// Borrar id
router.delete('/:id', eliminarEvento)

module.exports = router