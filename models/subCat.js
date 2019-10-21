const mongoose = require('./connection.js')

const SubCatSchema = new mongoose.Schema({
 category: String, 
 description: String, 
 picture: String,
//  listingItem: {
//    type: Schema.Types.ObjectId, 
//    ref: 'ListingItemSchema'
//  } 
})

const SubCatCollection = mongoose.model('subCat', SubCatSchema)

//getAll
const getAllSubCat = () => {
  return SubCatCollection.find({})
}
//getOne
const getOneSubCat = (id) => {
  return SubCatCollection.findById(id)
}
//create
const createSubCat = (newSubCatData) => {
  return SubCatCollection.create(newSubCatData)
}
//update
const updateSubCat = (id, newSubCatData) => {
  return SubCatCollection.updateOne({_id: id}, newSubCatData)
}
//delete
const deleteSubCat = (id) => {
  return SubCatCollection.deleteOne({_id: id})
}

module.exports = {
  getAllSubCat,
  getOneSubCat,
  createSubCat,
  updateSubCat,
  deleteSubCat
}
