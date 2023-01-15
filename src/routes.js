const express = require('express')

const circuits = require('./circuits/index')
const drivers = require('./drivers/index')
const functions = require('./functions')
const races = require('./races/index')
const teams = require('./teams/index')
// const circuits = require('./oldcircuits.json')
// const drivers = require('./olddrivers.json')
// const races = require('./oldraces.json')
// const teams = require('./oldteams.json')

const routes = express.Router();

routes.post('/circuits/filter', circuits.filterList)
routes.post('/circuits/save', circuits.saveItem)

routes.post('/drivers/filter', drivers.filterList)
routes.post('/drivers/save', drivers.saveItem)

routes.post('/races/filter', races.filterList)
routes.post('/races/save', races.saveItem)

routes.post('/teams/filter', teams.filterList)
routes.post('/teams/save', teams.saveItem)

routes.get('/standings/:pos', (req, res) => {
  const pos = req.params.pos
  const points = functions.calcPoints(pos)
  res.status(200).json(points)
})

module.exports = routes;