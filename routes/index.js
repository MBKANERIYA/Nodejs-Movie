let express = require("express")
let movieRoute = require("./movie.routes")
let routes = express.Router()

routes.use("/movie", movieRoute)

module.exports = routes