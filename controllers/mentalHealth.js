const express = require('express')

const mentalHealthApi = require('../models/mentalHealth.js')

const mentalHealthRouter = express.Router()

//new mentalHealth form
mentalHealthRouter.get('/mentalHealth/new', (req, res) => {
  res.render('newMentalHealthForm')
})

//edit mentalHealth form
mentalHealthRouter.get('/mentalHealth/edit/:id', (req, res) => {
  mentalHealthApi.getOneMentalHealth(req.params.id)
    .then((oneMentalHealth) => {
      res.render('editMentalHealthForm', oneMentalHealth)
    })
})
//getAll
mentalHealthRouter.get('/mentalHealth', (req, res) => {
  mentalHealthApi.getAllMentalHealth()
  .then((allMentalHealth) => {
    res.render('allMentalHealth', {allMentalHealth})
  })
})
//getOne
mentalHealthRouter.get('/mentalHealth/:id', (req, res) => {
  mentalHealthApi.getOneMentalHealth(req.params.id)
  .then((oneMentalHealth) => {
    res.render('oneMentalHealth', oneMentalHealth )
  })
})
//create
mentalHealthRouter.post('/mentalHealth', (req, res) => {
  mentalHealthApi.createMentalHealth(req.body)
  .then((newMentalHealthData) => {
    res.redirect('/mentalHealth')
  })
})
//update
mentalHealthRouter.put('/mentalHealth/:id', (req, res) => {
  mentalHealthApi.updateMentalHealth(req.params.id, req.body)
  .then((updatedMentalHealth) => {
    res.redirect(`/mentalHealth/${req.params.id}`)
  })
})
//delete
mentalHealthRouter.delete('/mentalHealth/:id', (req, res) => {
  mentalHealthApi.deleteMentalHealth(req.params.id)
  .then((deletedMentalHealth) => {
    res.redirect('/mentalHealth')
  })
})
module.exports = {
  mentalHealthRouter
}
