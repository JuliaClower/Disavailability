const express = require('express')

const handicapApi = require('../models/handicap.js')

const handicapRouter = express.Router()

//new handicap form
handicapRouter.get('/handicap/new', (req, res) => {
  res.render('newHandicapForm')
})

//edit handicap form
handicapRouter.get('/handicap/edit/:id', (req, res) => {
  handicapApi.getOneHandicap(req.params.id)
    .then((oneHandicap) => {
      res.render('editHandicapForm', oneHandicap)
    })
})
//getAll
handicapRouter.get('/handicap', (req, res) => {
  handicapApi.getAllHandicap()
  .then((allHandicap) => {
    res.render('allHandicap', {allHandicap})
  })
})
//getOne
handicapRouter.get('/handicap/:id', (req, res) => {
  handicapApi.getOneHandicap(req.params.id)
  .then((oneHandicap) => {
    res.render('oneHandicap', oneHandicap )
  })
})
//create
handicapRouter.post('/handicap', (req, res) => {
  handicapApi.createHandicap(req.body)
  .then((newHandicapData) => {
    res.redirect('/handicap')
  })
})
//update
handicapRouter.put('/handicap/:id', (req, res) => {
  handicapApi.updateHandicap(req.params.id, req.body)
  .then((updatedHandicap) => {
    res.redirect(`/handicap/${req.params.id}`)
  })
})
//delete
handicapRouter.delete('/handicap/:id', (req, res) => {
  handicapApi.deleteHandicap(req.params.id)
  .then((deletedHandicap) => {
    res.redirect('/handicap')
  })
})
module.exports = {
  handicapRouter
}
