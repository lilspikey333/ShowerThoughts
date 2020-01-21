const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const thoughtSchema = new Schema({
    name: String,
    thought: String,
    comments: [String]
})

const Thought = mongoose.model("Thought", thoughtSchema)
module.exports = Thought