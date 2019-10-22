const express = require('express')

const landingApi = require('../models/landing.js')

const landingRouter = express.Router()

//landing page
landingRouter.get('/', (req, res) => {
  res.render('landingView')
})

module.exports = {
    landingRouter
  }