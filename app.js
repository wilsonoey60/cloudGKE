'use strict'

const express = require('express')

const PORT = 8000
const HOST = '0.0.0.0'

const app = express()

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/WebProfile.html')
    res.sendFile(__dirname + '/FotoProfil.png')
    res.sendFile(__dirname + '/GithubPictures.png')
    res.sendFile(__dirname + '/InstagramPictures.png')
    res.sendFile(__dirname + '/LinkedinPictures.png')
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
