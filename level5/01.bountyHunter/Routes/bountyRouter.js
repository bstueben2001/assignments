const express = require("express");
const { v4: uuidv4 } = require("uuid");

const bountyRouter = express.Router();

const bounties = [
  { firstName: "Darth", lastName: "Vader", living: false, bountyAmount: 1000000, type: "Sith", _id: uuidv4() },
  { firstName: "Darth", lastName: "Maul", living: false, bountyAmount: 750000, type: "Sith", _id: uuidv4() },
  { firstName: "Luke", lastName: "Skywalker", living: true, bountyAmount: 500000, type: "Jedi", _id: uuidv4() },
  { firstName: "Obi-Wan", lastName: "Kenobi", living: false, bountyAmount: 800000, type: "Jedi", _id: uuidv4() },
  { firstName: "Yoda", lastName: "Unknown", living: false, bountyAmount: 950000, type: "Jedi", _id: uuidv4() }
];

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
