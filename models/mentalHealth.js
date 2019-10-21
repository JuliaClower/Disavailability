const mongoose = require('./connection.js')

const MentalHealthModelSchema = new mongoose.Schema({
 category: String, 
 name: String, 
 depressionHelp: Boolean, 
 anxietyHelp: Boolean, 
 ptsdHelp: Boolean, 
 description: String, 
 picture: String
})

const MentalHealthCollection = mongoose.model('mentalHealth', MentalHealthModelSchema)

//getAll
const getAllMentalHealth = () => {
  return MentalHealthCollection.find({})
}
//getOne
const getOneMentalHealth = (id) => {
  return MentalHealthCollection.findById(id)
}
//create
const createMentalHealth = (newMentalHealthData) => {
  return MentalHealthCollection.create(newMentalHealthData)
}
//update
const updateMentalHealth = (id, newMentalHealthData) => {
  return MentalHealthCollection.updateOne({_id: id}, newMentalHealthData)
}
//delete
const deleteMentalHealth = (id) => {
  return MentalHealthCollection.deleteOne({_id: id})
}

module.exports = {
  getAllMentalHealth,
  getOneMentalHealth,
  createMentalHealth,
  updateMentalHealth,
  deleteMentalHealth
}
