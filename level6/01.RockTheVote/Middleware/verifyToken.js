const jwt = require("jsonwebtoken")

function verifyToken(req, res, next) {
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).send({ errMsg: "No token provided" })
    }

    const token = authHeader.split(" ")[1]

    try {
        const payload = jwt.verify(token, process.env.SECRET)
        req.user = payload
        next()
    } catch (err) {
        return res.status(401).send({ errMsg: "Invalid or expired token" })
    }
}

module.exports = verifyToken
