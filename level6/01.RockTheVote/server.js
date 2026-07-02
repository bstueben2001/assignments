const express = require("express")
const app = express()
const mongoose = require("mongoose")
const morgan = require("morgan")
const cors = require("cors")
require("dotenv").config()

const authRouter = require("./Routes/authRouter")
const issueRouter = require("./Routes/issueRouter")
const commentRouter = require("./Routes/commentRouter")

app.use(cors())
app.use(express.json())
app.use(morgan("dev"))

async function connectToDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to DB")
    } catch (err) {
        console.log(err)
    }
}
connectToDB()

app.use("/api/auth", authRouter)
app.use("/api/issues", issueRouter)
app.use("/api/comments", commentRouter)

app.use((err, req, res, next) => {
    console.log(err)
    return res.status(err.status || 500).send({ errMsg: err.message })
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})
