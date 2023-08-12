const express = require('express')
const itemsController = require("./itemsController")

const itemsRouter = express.Router()
itemsRouter.get('/search', itemsController.searchItems)

module.exports = itemsRouter