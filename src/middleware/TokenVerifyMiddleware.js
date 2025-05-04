const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.headers['token-key'];

    if (!token) {
        return res.status(401).json({
            status: "fail",
            message: "Token not found"
        });
    }

    try {
        const decoded = jwt.verify(token, 'secret-key');
        req.user = decoded; // attach user info to request if needed
        next(); // proceed to the next middleware or route handler
    } catch (error) {
        return res.status(401).json({
            status: "fail",
            message: "Invalid or expired token"
        });
    }
};
