const StudentsModel = require("../models/StudentsModel");
const jwt = require('jsonwebtoken');

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
        const query = { _id: id }
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
        const query = { _id: id }
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

// JSON WEB TOKEN (JWT) Practice
// 1. Create Token
exports.CreateToken = async (req, res) => {
    const Payload = {
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        data: { id: '1', name: 'sakib', admin: true }
    }

    let token = await jwt.sign(Payload, 'secret-key');
    await res.status(200).json({
        status: "success",
        data: token
    })
}

// 2. Verify Token
exports.VerifyToken = async (req, res) => {
    const token = req.headers['token-key']
    if (!token) {
        return res.status(401).json({ message: 'Access token is missing' });
    }
    try {
        var decoded = jwt.verify(token, 'secret-key');
        return res.status(200).json({ message: 'Token is valid', user: decoded });
    } catch (err) {
        return res.status(403).json({ message: 'Invalid or expired token' });
    }

}
