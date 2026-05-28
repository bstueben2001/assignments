const express = require("express")
const app = express()
const {v4: uuidv4} = require('uuid')

app.use(express.json())

app.use("/bounties",require("./Routes/bountyRouter.js"))

app.listen(9000, () => {
    console.log("Server running on port 9000")
})