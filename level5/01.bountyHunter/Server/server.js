const express = require("express")
const app = express()
const {v4: uuidv4} = require('uuid')

//app.use is middleware

app.use(express.json())

app.use("/bounties",require("../Routes/bountyRouter.js"))

//error handling
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(9000, () => {
    console.log("Server running on port 9000")
})