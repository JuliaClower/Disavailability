const express = require('express')

const categoryApi = require('../models/category.js')

const categoryRouter = express.Router()

//new category form
categoryRouter.get('/category/new', (req, res) => {
  res.render('newCategoryForm')
})

//edit category form
categoryRouter.get('/category/edit/:id', (req, res) => {
  categoryApi.getOneCategory(req.params.id)
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
categoryRouter.get('/category/:id', (req, res) => {
  categoryApi.getOneCategory(req.params.id)
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
categoryRouter.put('/category/:id', (req, res) => {
  categoryApi.updateCategory(req.params.id, req.body)
  .then((updatedCategory) => {
    res.redirect(`/category/${req.params.id}`)
  })
})
//delete
categoryRouter.delete('/category/:id', (req, res) => {
  categoryApi.deleteCategory(req.params.id)
  .then((deletedCategory) => {
    res.redirect('/category')
  })
})
module.exports = {
  categoryRouter
}
