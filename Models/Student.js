var mongoose = require('mongoose');

var studentSchema = mongoose.Schema({
    name:String,
    er:Number,
    branch:String
})

module.exports = mongoose.model("students",studentSchema)
