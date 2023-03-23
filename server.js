const express = require('express')

const app = express()
app.use(express.json())

app.use(express.static(`${__dirname}/public`))

let animals = []

app.post('/add', (req, res) => {
    animals.push(req.body)
    res.status(200).send(animals)
})

app.get('/get', (req, res) => {
    res.status(200).send(animals)
})

app.listen(5070, () => console.log('app is running on 5070'))