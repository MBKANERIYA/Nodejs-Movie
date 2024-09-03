let mongoose = require("mongoose")

let movieSchema = new mongoose.Schema({
    movie_name: {},
    movie_price: {},
    movie_desc: {},
    movie_images: {},
})

let movie = mongoose.model("movieSchema", movieSchema)
module.exports = movie