const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.get('/api/config', (req, res) => {
    res.send({version: '1.0.0'})
})

app.post('/api/data', (req, res) => {
    res.send({result: 0, message: 'message'})
})

app.listen(5000, () => console.log('Listening on port 5000! http://localhost:5000'))
