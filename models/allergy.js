const mongoose = require('./connection.js')

const AllergyModelSchema = new mongoose.Schema({
 category: String, 
 name: String, 
 allergyFriendly: Boolean,
 vegetarianFriendly: Boolean,
 veganFriendly: Boolean, 
 ketoFriendly: Boolean, 
 description: String, 
 picture: String
})

const AllergyCollection = mongoose.model('allergy', AllergyModelSchema)

//getAll
const getAllAllergy = () => {
  return AllergyCollection.find({})
}
//getOne
const getOneAllergy = (id) => {
  return AllergyCollection.findById(id)
}
//create
const createAllergy = (newAllergyData) => {
  return AllergyCollection.create(newAllergyData)
}
//update
const updateAllergy = (id, newAllergyData) => {
  return AllergyCollection.updateOne({_id: id}, newAllergyData)
}
//delete
const deleteAllergy = (id) => {
  return AllergyCollection.deleteOne({_id: id})
}

module.exports = {
  getAllAllergy,
  getOneAllergy,
  createAllergy,
  updateAllergy,
  deleteAllergy
}
