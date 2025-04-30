const mongoose = require("mongoose");

const DataSchema = mongoose.Schema({
    // name: String,
    // roll: String,
    // class: String,
    // age: Number,
    // mobile: Number,
    // remark: String,

    name: { type: String },
    roll: { type: String },
    class: { type: String },
    age: { type: Number,
        min: [10, "Age must be more than 10"],
        max: [30, "Age must be less than 30"],
     },
     mobile: {
        type: String,
        validate: (value) => {
            if (value.length !== 11) {
                return false
            } else {
                return true
            }
        },
        message: "Mobile Number should be 11 digits",
     },
    remark: { type: String },
})

const StudentsModel = mongoose.model("students", DataSchema)

module.exports = StudentsModel;