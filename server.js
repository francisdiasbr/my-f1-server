const cors = require('cors')
const express = require('express')
const server = express()

const functions = require('./functions')

const circuits = []

server.use(cors())
server.use(express.json())
server.use(express.urlencoded({ extended: true}))

server.get('/', (req, res) => {
    console.log('rota raiz')
    res.send('rota raiz no client!')
})
server.get('/rota2/:id', (req, res) => {
    console.log(`chamou no server ${req.params.id}`)
    res.status(200).json(req.params.id)
})
server.get('/standings/:pos', (req, res) => {
    const pos = req.params.pos
    const points = functions.calcPoints(pos)
    res.status(200).json(points)
})
server.post('/circuits', (req, res) => {
    console.log(req.body)
    circuits.push(req.body)
    res.status(200).json({sucess:true})
})
server.get('/circuits', (req, res) => {
    res.status(200).json(circuits)
})
server.get('/:id', (req, res) => {
    console.log(`chamou no server ${req.params.id}`)
    const resultado = req.params.id / 5
    res.status(200).json(resultado)
})
server.listen(3001, () => {
    console.log('meu primeiro servidor subiu')
})