const express = require('express')

const categoryApi = require('../models/category.js')

const categoryRouter = express.Router()

//getAll
categoryRouter.get('/category', (res, req) => {
  categoryApi.getAllCategory()
  .then((allCategory) => {
    res.render('allCategory', {allCategory})
  })
})
//getOne
categoryRouter.get('/category/id', (res, req) => {
  categoryApi.getOneCategory(req.params.id)
  .then((oneCategory) => {
    res.render('oneCategory', oneCategory)
  })
})
//create
categoryRouter.create('/category', (req, res) => {
  categoryApi.createCategory(req.body)
  .then((newCategoryData) => {
    res.redirect('/category')
  })
})
//update
categoryRouter.update('/category/id', (req, res) => {
  categoryApi.updateCategory(req.params.id, req.body)
  .then((updatedCategory) => {
    res.redirect('/category/${req.params.id}')
  })
})
//delete
categoryRouter.delete('/category/id', (req, res) => {
  categoryApi.deleteCategory(req.params.id)
  .then((deletedCategory) => {
    res.redirect('/category')
  })
})
module.exports = {
  categoryRouter
}
