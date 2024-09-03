const uploadImage = require("../middleware/cloud");
const { bookServices, movieServices } = require("../services")

module.exports.addMovie = async (req, res) => {
    try {
        let body = req.body
        let { path, originalname } = req.file;
        let cloud = await uploadImage(path, originalname)

        let newBody = {
            ...body,
            movie_images: cloud.url
        }
        let movie = await movieServices.createMovie(newBody)
        res.status(201).json({
            message: "MOVIE ADDED SUCCESSFULLY",
            movie
        })
    } catch (err) {
        res.status(500).json({ err: err.message })
    }
}
module.exports.getMovie = async (req, res) => {
    try {
        let movie = await movieServices.getAllMovies()
        res.status(200).json({
            message: "GET ALL MOVIE SUCCESSFULLY",
            movie
        })
    } catch (err) {
        res.status(500).json({ err: err.message })
    }
}
module.exports.deleteMovie = async (req, res) => {
    try {
        let { id } = req.params
        let movie = await movieServices.findByIdAndDelete(id)
        res.status(200).json({
            message: "MOVIE DELETED SUCCESSFULLY",
            movie
        })
    } catch (err) {
        res.status(500).json({ err: err.message })
    }
}
module.exports.updateMovie = async (req, res) => {
    try {
        let { id } = req.params
        let body = req.body
        let { path, originalname } = req.file;
        let cloud = await uploadImage(path, originalname)

        let newBody = {
            ...body,
            movie_images: cloud.url
        }
        let updatedBody = {
            id,
            ...newBody
        }
        let movie = await movieServices.findByIdAndUpdate(id, body)
        res.status(200).json({
            message: "MOVIE UPDATED SUCCESSFULLY",
            updatedBody
        })
    } catch (err) {
        res.status(500).json({ err: err.message })
    }
}

module.exports.viewMovie = async (req, res) => {
    try {
        let { id } = req.params

        let movie = await movieServices.findById(id)
        console.log(movie);


        res.status(200).json({
            message: "MOVIE DETAILS VIEW SUCCESSFULLY",
            movie
        })
    } catch (err) {
        res.status(500).json({ err: err.message })
    }
}