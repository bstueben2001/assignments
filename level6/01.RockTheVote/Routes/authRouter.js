const express = require("express")
const authRouter = express.Router()
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const User = require("../Models/User")

function signToken(user) {
    return jwt.sign(
        { id: user._id.toString(), username: user.username },
        process.env.SECRET,
        { expiresIn: "3d" }
    )
}

authRouter.post("/signup", async (req, res, next) => {
    try {
        const { username, password } = req.body
        if (!username || !password) {
            return res.status(400).send({ errMsg: "Username and password are required" })
        }

        const existingUser = await User.findOne({ username })
        if (existingUser) {
            return res.status(400).send({ errMsg: "Username is already taken" })
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await User.create({ username, password: hashedPassword })

        const token = signToken(user)
        return res.status(201).send({
            token,
            user: { id: user._id, username: user.username }
        })
    } catch (error) {
        next(error)
    }
})

authRouter.post("/login", async (req, res, next) => {
    try {
        const { username, password } = req.body
        if (!username || !password) {
            return res.status(400).send({ errMsg: "Username and password are required" })
        }

        const user = await User.findOne({ username })
        if (!user) {
            return res.status(401).send({ errMsg: "Invalid username or password" })
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(401).send({ errMsg: "Invalid username or password" })
        }

        const token = signToken(user)
        return res.send({
            token,
            user: { id: user._id, username: user.username }
        })
    } catch (error) {
        next(error)
    }
})

module.exports = authRouter
