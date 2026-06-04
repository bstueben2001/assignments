const express = require("express");
const Bounty = require('../Models/bounty');

const bountyRouter = express.Router();

// Get bounties by type (must come before /:bountyId)
bountyRouter.get("/search/type", async (req, res, next) => {
    try {
        const { type } = req.query;
        if (!type) {
            const err = new Error('You must provide a type');
            res.status(400);
            return next(err);
        }
        const filtered = await Bounty.find({ type });
        return res.status(200).send(filtered);
    } catch (err) {
        res.status(500);
        return next(err);
    }
});

// Get all bounties
bountyRouter.get("/", async (req, res, next) => {
    try {
        const bounties = await Bounty.find();
        return res.status(200).send(bounties);
    } catch (err) {
        res.status(500);
        return next(err);
    }
});

// Get one bounty by id
bountyRouter.get("/:bountyId", async (req, res, next) => {
    try {
        const bounty = await Bounty.findById(req.params.bountyId);
        if (!bounty) {
            const err = new Error(`Bounty with id ${req.params.bountyId} was not found`);
            res.status(404);
            return next(err);
        }
        return res.status(200).send(bounty);
    } catch (err) {
        res.status(500);
        return next(err);
    }
});

// Create a new bounty
bountyRouter.post("/", async (req, res, next) => {
    try {
        const newBounty = new Bounty(req.body);
        const savedBounty = await newBounty.save();
        return res.status(201).send(savedBounty);
    } catch (err) {
        res.status(500);
        return next(err);
    }
});

// Update a bounty by id
bountyRouter.put("/:bountyId", async (req, res, next) => {
    try {
        const updatedBounty = await Bounty.findByIdAndUpdate(
            req.params.bountyId,
            req.body,
            { new: true }
        );
        if (!updatedBounty) {
            const err = new Error(`Bounty with id ${req.params.bountyId} was not found`);
            res.status(404);
            return next(err);
        }
        return res.status(200).send(updatedBounty);
    } catch (err) {
        res.status(500);
        return next(err);
    }
});

// Delete a bounty by id
bountyRouter.delete("/:bountyId", async (req, res, next) => {
    try {
        const deletedBounty = await Bounty.findByIdAndDelete(req.params.bountyId);
        if (!deletedBounty) {
            const err = new Error(`Bounty with id ${req.params.bountyId} was not found`);
            res.status(404);
            return next(err);
        }
        return res.status(200).send(deletedBounty);
    } catch (err) {
        res.status(500);
        return next(err);
    }
});

module.exports = bountyRouter;
