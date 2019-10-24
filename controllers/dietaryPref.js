const express = require('express')

const dietaryPrefApi = require('../models/dietaryPref.js')

const dietaryPrefRouter = express.Router()

//new dietaryPref form
dietaryPrefRouter.get('/dietaryPref/new', (req, res) => {
  res.render('newDietaryPrefForm')
})

//edit dietaryPref form
dietaryPrefRouter.get('/dietaryPref/edit/:id', (req, res) => {
  dietaryPrefApi.getOneDietaryPref(req.params.id)
    .then((oneDietaryPref) => {
      res.render('editDietaryPrefForm', oneDietaryPref)
    })
})
//getAll
dietaryPrefRouter.get('/dietaryPref', (req, res) => {
  dietaryPrefApi.getAllDietaryPref()
  .then((allDietaryPref) => {
    res.render('allDietaryPref', {allDietaryPref})
  })
})
//getOne
dietaryPrefRouter.get('/dietaryPref/:id', (req, res) => {
  dietaryPrefApi.getOneDietaryPref(req.params.id)
  .then((oneDietaryPref) => {
    res.render('oneDietaryPref', oneDietaryPref )
  })
})
//create
dietaryPrefRouter.post('/dietaryPref', (req, res) => {
  dietaryPrefApi.createDietaryPref(req.body)
  .then((newDietaryPrefData) => {
    res.redirect('/dietaryPref')
  })
})
//update
dietaryPrefRouter.put('/dietaryPref/:id', (req, res) => {
  dietaryPrefApi.updateDietaryPref(req.params.id, req.body)
  .then((updatedDietaryPref) => {
    res.redirect(`/dietaryPref/${req.params.id}`)
  })
})
//delete
dietaryPrefRouter.delete('/dietaryPref/:id', (req, res) => {
  dietaryPrefApi.deleteDietaryPref(req.params.id)
  .then((deletedDietaryPref) => {
    res.redirect('/dietaryPref')
  })
})
module.exports = {
  dietaryPrefRouter
}
