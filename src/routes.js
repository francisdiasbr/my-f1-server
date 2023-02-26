const express = require('express')

const functions = require('./functions')
const circuits = require('./circuits/index')
const drivers = require('./drivers/index')
const races = require('./races/index')
const teams = require('./teams/index')
const articles = require('./articles/index')
const calendar = require('./calendar/index')

const routes = express.Router();

routes.get('/standings/:pos', (req, res) => {
  const pos = req.params.pos
  const points = functions.calcPoints(pos)
  res.status(200).json(points)
})

routes.post('/circuits/filter', circuits.filterList)
routes.post('/circuits/save', circuits.saveItem)

routes.post('/drivers/filter', drivers.filterList)
routes.post('/drivers/save', drivers.saveItem)

routes.post('/races/filter', races.filterList)
routes.post('/races/save', races.saveItem)

routes.post('/teams/filter', teams.filterList)
routes.post('/teams/save', teams.saveItem)

routes.post('/articles/filter', articles.filterList)
routes.post('/articles/save', articles.saveItem)

routes.post('/calendar/filter', calendar.filterList)
routes.post('/calendar/save', calendar.saveItem)


module.exports = routes;