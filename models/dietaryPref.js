const mongoose = require('./connection.js')

const DietaryPrefModelSchema = new mongoose.Schema({
 category: String, 
 name: String, 
 dietaryPrefFriendly: Boolean,
 vegetarianFriendly: Boolean,
 veganFriendly: Boolean, 
 ketoFriendly: Boolean, 
 description: String, 
 picture: String
})

const DietaryPrefCollection = mongoose.model('dietaryPref', DietaryPrefModelSchema)

//getAll
const getAllDietaryPref = () => {
  return DietaryPrefCollection.find({})
}
//getOne
const getOneDietaryPref = (id) => {
  return DietaryPrefCollection.findById(id)
}
//create
const createDietaryPref = (newDietaryPrefData) => {
  return DietaryPrefCollection.create(newDietaryPrefData)
}
//update
const updateDietaryPref = (id, newDietaryPrefData) => {
  return DietaryPrefCollection.updateOne({_id: id}, newDietaryPrefData)
}
//delete
const deleteDietaryPref = (id) => {
  return DietaryPrefCollection.deleteOne({_id: id})
}

module.exports = {
  getAllDietaryPref,
  getOneDietaryPref,
  createDietaryPref,
  updateDietaryPref,
  deleteDietaryPref
}
