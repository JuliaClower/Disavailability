const mongoose = require('./connection.js')

const CategoryModelSchema = new mongoose.Schema({
 category: String, 
 description: String, 
 picture: String,
 subCats: {
   type: Schema.Types.ObjectId, 
   ref: 'SubCatSchema'
 } 
})

const CategoryCollection = mongoose.model('Category', CategoryModelSchema)

//getAll
const getAllCategory = () => {
  return CategoryCollection.find({})
}
//getOne
const getOneCategory = (id) => {
  return CategoryCollection.findById(id)
}
//create
const createCategory = (newCategoryData) => {
  return CategoryCollection.create(newCategoryData)
}
//update
const updateCategory = (id, newCategoryData) => {
  return CategoryCollection.updateOne({_id: id}, newCategoryData)
}
//delete
const deleteCategory = (id) => {
  return CategoryCollection.deleteOne({_id: id})
}

module.exports = {
  getAllCategory,
  getOneCategory,
  createCategory,
  updateCategory,
  deleteCategory
}
