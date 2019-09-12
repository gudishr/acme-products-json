const express = require('express')
const db = require('./db')
const path = require('path')

const app = express()

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(3000, () => {
  console.log("Listening on port 3000")
})