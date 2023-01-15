const express = require('express')

const functions = require('./functions')

const circuits = require('./oldcircuits.json')
const drivers = require('./olddrivers.json')
const races = require('./oldraces.json')
const teams = require('./oldteams.json')

const routes = express.Router();
// const CircuitsGetController = require('./controllers/CircuitsGetController')
// const CircuitsPostController = require('./controllers/CircuitsPostController')

routes.get('/standings/:pos', (req, res) => {
  const pos = req.params.pos
  const points = functions.calcPoints(pos)
  res.status(200).json(points)
})

// routes.get('/circuits', CircuitsGetController.store)
// routes.post('/circuits', CircuitsPostController.store)

routes.post('/circuits', (req, res) => {
  console.log(req.body)
  circuits.push(req.body)
  res.status(200).json({sucess:true})
})
routes.get('/circuits', (req, res) => {
  res.status(200).json(circuits)
})

routes.get('/drivers', (req, res) => {
  res.status(200).json(drivers)
})
routes.post('/drivers', (req, res) => {
  console.log(req.body)
  drivers.push(req.body)
  res.status(200).json({ sucess: true })
})
routes.get('/races', (req, res) => {
  res.status(200).json(races)
})
routes.post('/races', (req, res) => {
  console.log(req.body)
  races.push(req.body)
  res.status(200).json({ sucess: true })
})
routes.get('/teams', (req, res) => {
  res.status(200).json(teams)
})
routes.post('/teams', (req, res) => {
  console.log(req.body)
  teams.push(req.body)
  res.status(200).json({ sucess: true })
})

module.exports = routes;