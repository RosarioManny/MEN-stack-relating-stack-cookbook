const mongoose = require("mongoose")

const recipeSchema = mongoose.Schema ({
    name: { type: String, required },
    instructions: String,
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required } ,
    ingredients: [mongoose.Schema.Types.ObjectId]
})

const recipe = mongoose.model("Recipe", recipeSchema)

module.exports = recipe