var mongoose = require('mongoose');

var studentsSchema = mongoose.Schema({
    name:String,
    er:Number,
    branch:String
})

module.exports = mongoose.model("students",studentsSchema)
