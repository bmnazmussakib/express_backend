const StudentsModel = require("../models/StudentsModel");

// CRUD

// Create
exports.InsertStudent = async (req, res) => {
    try {
        let reqBody = req.body;
        const data = await StudentsModel.create(reqBody)
        res.status(201).json({
            status: "success",
            data: data
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            data: error
        })
    }
}

// Read
exports.ReadStudents = async (req, res) => {
    try {
        const query = {}
        let projection = "name roll class remark"
        const data = await StudentsModel.find(query, projection)
        res.status(200).json({
            status: "success",
            data: data
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            data: error
        })
    }
}

// Update
exports.UpdateStudents = async (req, res) => {
    try {
        const id = req.params.id
        const query = {_id: id}
        let reqBody = req.body;
        // const data = await StudentsModel.updateOne(query, reqBody)
        const data = await StudentsModel.findByIdAndUpdate(query, reqBody, { new: true });
        res.status(200).json({
            status: "success",
            data: data
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            data: error
        })
    }
}

// Delete
exports.DeleteStudents = async (req, res) => {
    try {
        const id = req.params.id
        const query = {_id: id}
        const data = await StudentsModel.deleteOne(query)
        res.status(200).json({
            status: "success",
            data: data
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            data: error
        })
    }
}