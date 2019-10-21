const express = require('express')

const categoryApi = require('../models/category.js')

const categoryRouter = express.Router()

//new category form
categoryRouter.get('/category/new', (req, res) => {
  res.render('newCategoryForm')
})

//edit category form
categoryRouter.get('/category/edit/:catId', (req, res) => {
  categoryApi.getOneCategory(req.params.catId)
    .then((oneCategory) => {
      res.render('editCategoryForm', oneCategory)
    })
})
//getAll
categoryRouter.get('/category', (req, res) => {
  categoryApi.getAllCategory()
  .then((allCategory) => {
    res.render('allCategory', {allCategory})
  })
})
//getOne
categoryRouter.get('/category/:catId', (req, res) => {
  categoryApi.getOneCategory(req.params.catId).populate('SubCatSchema')
  .then((oneCategory) => {
    res.render('oneCategory', oneCategory)
  })
})
//create
categoryRouter.post('/category', (req, res) => {
  categoryApi.createCategory(req.body)
  .then((newCategoryData) => {
    res.redirect('/category')
  })
})
//update
categoryRouter.put('/category/:catId', (req, res) => {
  categoryApi.updateCategory(req.params.catId, req.body)
  .then((updatedCategory) => {
    res.redirect(`/category/${req.params.catId}`)
  })
})
//delete
categoryRouter.delete('/category/:catId', (req, res) => {
  categoryApi.deleteCategory(req.params.catId)
  .then((deletedCategory) => {
    res.redirect('/category')
  })
})
module.exports = {
  categoryRouter
}
