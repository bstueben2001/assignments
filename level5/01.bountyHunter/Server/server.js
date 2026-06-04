const express = require("express")
const app = express()
const {v4: uuidv4} = require('uuid')
const morgan = require('morgan')
require('dotenv').config({ path: __dirname + '/.env' })
const mongoose = require('mongoose')

//app.use is middleware

app.use(express.json())
app.use(morgan('dev'))

async function connectToDB(){
    try{
        console.log("MONGO_URI =", process.env.MONGO_URI)
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to DB")
    }catch(err){
        console.log(err)
    }
}

connectToDB();

app.use("/bounties",require("../Routes/bountyRouter.js"))

//error handling
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(9000, () => {
    console.log("Server running on port 9000")
})
