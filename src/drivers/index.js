const Model = require('./model')
const get = require('lodash/get')

const filterList = async (req, res) => {
  const body = req.body
  Model.filter(body, (result) => {
    const items = get(result, 'items', [])
    return res.status(200).json(items)
  })
}

const saveItem = (req, res) => {
  const body = req.body
  if (body._id) {
    Model.updateItem(body, (result) => {
      return res.status(200).json(result)
    })
  } else {
    Model.saveItem(body, (result) => {
      return res.status(200).json(result)
    })
  }
}

module.exports = { filterList, saveItem }