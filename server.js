const express = require('express')

const app = express()
app.use(express.json())

app.use(express.static(`${__dirname}/public`))

var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: 'daec6868cb5f44ebae1eff5d55e33e62',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

rollbar.log('Hello world!')

let animals = []

app.post(`/add`, (req, res) => {
    animals.push(req.body)
    rollbar.info('someone added an animal')
    res.status(200).send(animals)
})

app.get('/get', (req, res) => {
    rollbar.info('Someone wanted to get all the animals')
    res.status(200).send(animals)
})

app.listen(5070, () => console.log('app is running on 5070'))