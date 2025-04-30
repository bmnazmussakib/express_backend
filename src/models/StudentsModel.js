const  mongoose = require("mongoose");

const DataSchema = mongoose.Schema({
    name: String,
    roll: String,
    class: String,
    remark: String,
})

const StudentsModel = mongoose.model("students", DataSchema)

module.exports = StudentsModel;