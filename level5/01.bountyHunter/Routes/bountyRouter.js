const express = require("express");
const { v4: uuidv4 } = require("uuid");
const bounties = require("../Database/bountyData");

const bountyRouter = express.Router();

//get types

//get whole array
bountyRouter.get("/", (req, res) => {
    res.status(200).send(bounties);
});

//get one
bountyRouter.get("/:bountyId", (req, res, next) => {
    const bountyId = req.params.bountyId;
    const foundBounty = bounties.find(bounty => bounty._id === bounties._id)
        if(!bounties._id){
            const error = new Error(`The item with id ${bountyId} was not found`)
            res.status(500)
            return next(error)
        }
    res.status(200).send(foundBounty)
});

//get by type
bountyRouter.get("/search/type", (req, res, next) => {
    const type = req.query.type;
        if(!type){
            const error = new Error(`You must provide a type`)
            res.status(500)
            return next(error)
            }
    const filteredBounty = bounties.filter(bounty => bounty.type === type)
    res.status(200).send(filteredBounty)
});


bountyRouter.post("/", (req, res) => {
  const newBounty = req.body;
  newBounty._id = uuidv4();
  bounties.push(newBounty);
  res.status(201).json(newBounty);
});

bountyRouter.put('/:bountyId', (req, res) => {
    const bountyId = req.params.bountyId
    const updatedObject = req.body
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)

    if (bountyIndex !== -1) {
        const updatedBounty = Object.assign(bounties[bountyIndex], updatedObject)
        res.status(201).send(updatedBounty)
    } else {
        res.status(404).send('Bounty not found')
    }
})

bountyRouter.delete("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    bounties.splice(bountyIndex, 1)
    res.send(bounties)
})

module.exports = bountyRouter;
