'use strict'

const express = require('express')

const PORT = 8000
const HOST = '0.0.0.0'

const app = express()

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile('public')
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
