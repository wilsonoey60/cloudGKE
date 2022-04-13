'use strict'

const express = require('express')

const PORT = 8000
const HOST = '0.0.0.0'

const app = express()
app.get('/', (req, res) => {
    res.send('Nama : Wilson Jonathan Oey\nNIM : 52021801\nJurusan : Informatika')
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)