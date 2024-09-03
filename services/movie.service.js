const { movieSchema } = require("../models")


module.exports.createMovie = (body) => {
    return movieSchema.create(body)
}
module.exports.getAllMovies = () => {
    return movieSchema.find()
}
module.exports.findByIdAndDelete = (id) => {
    return movieSchema.findByIdAndDelete(id)
}
module.exports.findByIdAndUpdate = (id, body) => {
    return movieSchema.findByIdAndUpdate(id, body)
}
module.exports.findById = (id) => {
    return movieSchema.findById(id)
}