let joi = require("joi")

let movie = {
    body:joi.object().keys({
        movie_name: joi.string().required().trim(),
        movie_price: joi.string().required().trim(),
        movie_desc: joi.string().required().trim(),
        movie_images: joi.string().optional().trim(),
    })
}
module.exports = movie