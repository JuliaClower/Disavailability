const mongoose = require('./connection.js')

const HandicapModelSchema = new mongoose.Schema({
 category: String, 
 name: String, 
 parkingAccessible: Boolean, 
 bathroomAccessible: Boolean,
 description: String, 
 picture: String
})

const HandicapCollection = mongoose.model('handicap', HandicapModelSchema)

//getAll
const getAllHandicap = () => {
  return HandicapCollection.find({})
}
//getOne
const getOneHandicap = (id) => {
  return HandicapCollection.findById(id)
}
//create
const createHandicap = (newHandicapData) => {
  return HandicapCollection.create(newHandicapData)
}
//update
const updateHandicap = (id, newHandicapData) => {
  return HandicapCollection.updateOne({_id: id}, newHandicapData)
}
//delete
const deleteHandicap = (id) => {
  return HandicapCollection.deleteOne({_id: id})
}

module.exports = {
  getAllHandicap,
  getOneHandicap,
  createHandicap,
  updateHandicap,
  deleteHandicap
}
