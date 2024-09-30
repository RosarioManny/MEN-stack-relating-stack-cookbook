const mongoose = require("mongoose")

const ingredientSchema = mongoose.Schema ({
    name: { 
        type: String, 
        required: true
    },
})

const ingredients = mongoose.model("Ingredients", ingredientSchema)

module.exports = ingredients