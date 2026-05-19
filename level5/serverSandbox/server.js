const express = require("express")
const app = express()
const {v4: uuidv4} = require('uuid')

app.use(express.json())

app.use("/movies",require("./routes/movieRouter.js"))

//two arguments: port
app.listen(9000, () => {
    console.log("Server running on port 909090")
})