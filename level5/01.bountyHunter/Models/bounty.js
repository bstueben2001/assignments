const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bountySchema = new Schema({
    firstName: {
        type: String,
        required: true,
        unique: true
    },
    lastName,
    living,
    bountyAmount,
    type,
    _id
})

module.exports = mongoose.model("Bounty", bountySchema)