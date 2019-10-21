const express = require('express')

const allergyApi = require('../models/allergy.js')

const allergyRouter = express.Router()

//new allergy form
allergyRouter.get('/allergy/new', (req, res) => {
  res.render('newAllergyForm')
})

//edit allergy form
allergyRouter.get('/allergy/edit/:id', (req, res) => {
  allergyApi.getOneAllergy(req.params.id)
    .then((oneAllergy) => {
      res.render('editAllergyForm', oneAllergy)
    })
})
//getAll
allergyRouter.get('/allergy', (req, res) => {
  allergyApi.getAllAllergy()
  .then((allAllergy) => {
    res.render('allAllergy', {allAllergy})
  })
})
//getOne
allergyRouter.get('/allergy/:id', (req, res) => {
  allergyApi.getOneAllergy(req.params.id)
  .then((oneAllergy) => {
    res.render('oneAllergy', oneAllergy )
  })
})
//create
allergyRouter.post('/allergy', (req, res) => {
  allergyApi.createAllergy(req.body)
  .then((newAllergyData) => {
    res.redirect('/allergy')
  })
})
//update
allergyRouter.put('/allergy/:id', (req, res) => {
  allergyApi.updateAllergy(req.params.id, req.body)
  .then((updatedAllergy) => {
    res.redirect(`/allergy/${req.params.id}`)
  })
})
//delete
allergyRouter.delete('/allergy/:id', (req, res) => {
  allergyApi.deleteAllergy(req.params.id)
  .then((deletedAllergy) => {
    res.redirect('/allergy')
  })
})
module.exports = {
  allergyRouter
}
