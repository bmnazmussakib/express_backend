const jwt = require('jsonwebtoken');

exports.CreateToken = async (req, res) => {
    const Payload = {
        exp: Math.floor(Date.now() / 1000) + (60 * 60), // 1 hour expiration
        data: {
            name: "Nazmus Sakib",
            city: "Dhaka",
            admin: true,
        }
    }

    const Token = jwt.sign(Payload, "secret-key");
    await res.status(200).json({
        status: "success",
        data: Token
    })
}