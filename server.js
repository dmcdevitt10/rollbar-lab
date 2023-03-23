const express = require('express')

const app = express()
app.use(express.json())

app.use(express.static(`${__dirname}/public`))

app.listen(5070, () => console.log('app is running on 5070'))