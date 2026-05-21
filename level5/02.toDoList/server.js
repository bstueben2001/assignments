const express = require("express")
const app = express()
const {v4: uuidv4} = require('uuid')
const morgan = require("morgan")


app.use(express.json())
app.use(morgan('dev'))

app.use("/toDoList",require("./Routes/toDoRouter.js"))

app.listen(9000, () => {
    console.log("Server running on port 9000")
})