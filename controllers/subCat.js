const express = require('express')

const subCatApi = require('../models/subCat.js')

const subCatRouter = express.Router()

//new subCat form
subCatRouter.get('/subCat/new', (req, res) => {
  res.render('newSubCatForm')
})

//edit subCat form
subCatRouter.get('/subCat/edit/:subcatId', (req, res) => {
  subCatApi.getOneSubCat(req.params.id)
    .then((oneSubCat) => {
      res.render('editSubCatForm', oneSubCat)
    })
})
//getAll
subCatRouter.get('/subCat', (req, res) => {
  subCatApi.getAllSubCat()
  .then((allSubCat) => {
    res.render('allSubCat', {allSubCat})
  })
})
//getOne
subCatRouter.get('/:catId/subCat/:subcatId', (req, res) => {
  subCatApi.getOneSubCat(req.params.subcatId).populate('listing')
  .then((oneSubCat) => {
    res.render('oneSubCat', oneSubCat)
  })
})
//create
subCatRouter.post('category/:catId', (req, res) => {
  subCatApi.createSubCat(req.body)
  .then((newSubCatData) => {
    res.redirect('category/:catId')
  })
})
//update
subCatRouter.put('/:catId/subCat/:subcatId', (req, res) => {
  subCatApi.updateSubCat(req.params.subcatId, req.body)
  .then((updatedSubCat) => {
    res.redirect(`/subCat/${req.params.subcatId}`)
  })
})
//delete
subCatRouter.delete('/subCat/:subcatId', (req, res) => {
  subCatApi.deleteSubCat(req.params.subcatId)
  .then((deletedSubCat) => {
    res.redirect('/subCat')
  })
})
module.exports = {
  subCatRouter
}
