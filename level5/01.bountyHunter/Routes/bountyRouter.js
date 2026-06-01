const express = require("express");
const { v4: uuidv4 } = require("uuid");
const bounties = require("../Client/bounty-app/src/Components/bountyData");

const bountyRouter = express.Router();

bountyRouter.get("/", (req, res) => {
  res.send(bounties);
});

bountyRouter.post("/", (req, res) => {
  const newBounty = req.body;
  newBounty._id = uuidv4();
  bounties.push(newBounty);
  res.send(`Successfully added ${newBounty.firstName} ${newBounty.lastName} to the database! Here's their ID: ${newBounty._id}`);
});

bountyRouter.put('/:bountyId', (req, res) => {
    const bountyId = req.params.bountyId
    const updatedObject = req.body
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)

    if (bountyIndex !== -1) {
        const updatedBounty = Object.assign(bounties[bountyIndex], updatedObject)
        res.send(updatedBounty)
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
