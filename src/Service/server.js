const express = require('express')
const cors = require('cors')
const data = require('./data')

const app = express()
app.use(cors())

app.get('/', (req, res) => {
    res.send('hi its working')
})

app.get('/movies', (req, res) => {
    res.send(data)
})

app.listen(3200)