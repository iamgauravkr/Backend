require('dotenv').config()
const express = require('express')

const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) =>{
    res.send('gauravsonu')
})

app.get('/login', (req, res) =>{
  res.send('<h1>login at official portal</h1>')
})

app.get('/youtube', (req, res) => {
  res.send('<h2>Saurav ka safar</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})