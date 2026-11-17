const path = require('path')

const express = require('express')
const { dbConnection } = require('./db/config')
const cors = require('cors')


require('dotenv').config()

//console.log(process.env)

const app = express()
dbConnection()

app.use(cors())

app.use(express.static('public'))


app.use(express.json())

//Rutas
app.use('/api/auth', require('./routes/auth'))
app.use('/api/events', require('./routes/events'))

app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
})


app.listen(process.env.PORT, () => {
    console.log('servidor corriendo en puerto ', process.env.PORT)
})  