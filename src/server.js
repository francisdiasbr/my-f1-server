const parser = require('body-parser')
const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes.js')

const server = express()

// conecta com o BD. inclui a URL de conexão de dentro do Atlas:
mongoose.connect('mongodb+srv://francisf1app:francisf1app@cluster0.yjubj.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  if (err) {
    console.log("Error Connecting to DB" + err);
  } else {
    console.log("Connected to DB");
  }
});

mongoose.set('strictQuery', false);
server.use(cors())
// informa que o corpo da requisição é um json (body-parser)
server.use(parser.json())
server.use(parser.urlencoded({ extended: true }))

server.use(routes)

server.listen(3001, () => {
  console.log('F1 server is crashing!')
})