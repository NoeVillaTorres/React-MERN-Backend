const {Schema, model} = require('mongoose')


const usuarioEsquema = ({
    name: {
        type: String,
        requiered: true
    },

    email: {
        type: String,
        requiered: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    }
})

module.exports = model('Usuario', usuarioEsquema)