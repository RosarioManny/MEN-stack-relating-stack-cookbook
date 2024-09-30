const mongoose = require("mongoose")

const ingredientSchema = mongoose.Schema ({
    name: { type: String, required },
})

const recipe = mongoose.model("Recipe", ingredientSchema)

module.exports = recipe