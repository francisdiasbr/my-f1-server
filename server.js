const cors = require('cors')
const express = require('express')
const server = express()

const circuits = require('./circuits.json')
const functions = require('./functions')
const pilots = require('./pilots.json')
const races = require('./races.json')
const teams = require('./teams.json')

server.use(cors())
server.use(express.json())
server.use(express.urlencoded({ extended: true}))

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
server.post('/pilots', (req, res) => {
    console.log(req.body)
    pilots.push(req.body)
    res.status(200).json({sucess:true})
})
server.get('/pilots', (req, res) => {
    res.status(200).json(pilots)
})
server.post('/races', (req, res) => {
    console.log(req.body)
    races.push(req.body)
    res.status(200).json({sucess:true})
})
server.get('/races', (req, res) => {
    res.status(200).json(races)
})
server.post('/teams', (req, res) => {
    console.log(req.body)
    teams.push(req.body)
    res.status(200).json({sucess:true})
})
server.get('/teams', (req, res) => {
    res.status(200).json(teams)
})
server.listen(3001, () => {
    console.log('F1 server subiu')
})