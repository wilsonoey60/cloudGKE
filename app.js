'use strict'

const express = require('express')

const PORT = 8000
const HOST = '0.0.0.0'

const app = express()

app.use(express.static(__dirname + '/WebProfile.html'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/WebProfile.html')
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
