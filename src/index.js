const express = require('express')
const app = express()
const pug = require('pug')
const config = require('../package').config

app.use(express.urlencoded({extended: true}))

app.get('/login', (req, res) => {
  res.type('text/html')
  const loginFunction = pug.compileFile('./src/templates/login.pug', {})
  var html = loginFunction()
  res.status(200).send(html)
})

app.listen(config.port)
console.log(`App port is ${config.port}`)
