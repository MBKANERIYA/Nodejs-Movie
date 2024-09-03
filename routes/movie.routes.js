let express = require("express")
const validate = require("../middleware/validation")
const { movieController } = require("../conterollers")
const { movieValidation } = require("../validation")
const upload = require("../middleware/upload")

let route = express.Router()

route.get("/get", movieController.getMovie)
route.post("/create", upload.single("movie_images"), validate(movieValidation), movieController.addMovie)
route.delete("/delete/:id", movieController.deleteMovie)
route.put("/update/:id", upload.single("movie_images"), validate(movieValidation), movieController.updateMovie)
route.get("/get/:id", movieController.viewMovie)
module.exports = route