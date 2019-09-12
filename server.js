const express = require('express')
const db = require('./db')
const path = require('path')
const dataLayer = db('products.json', () => {})

const app = express()

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/api/products', async (req, res, next) => {
  try {
    const products = await dataLayer.findAll()
    res.send(products)
  }
  catch(ex){
    next(ex)
  }
})

app.listen(3000, () => {
  console.log("Listening on port 3000")
})