const express = require('express');
const Inventory = require('../Models/inventorySchema');

const inventoryRouter = express.Router();

// Get all items
inventoryRouter.get('/', async (req, res, next) => {
    try {
        const items = await Inventory.find();
        return res.status(200).send(items);
    } catch (error) {
        res.status(500);
        return next(error);
    }
});

// Get one item by id
inventoryRouter.get('/:itemId', async (req, res, next) => {
    try {
        const item = await Inventory.findById(req.params.itemId);
        if (!item) {
            const error = new Error(`Item with id ${req.params.itemId} was not found`);
            res.status(404);
            return next(error);
        }
        return res.status(200).send(item);
    } catch (error) {
        res.status(500);
        return next(error);
    }
});

// Create a new item
inventoryRouter.post('/', async (req, res, next) => {
    try {
        const newItem = new Inventory(req.body);
        const savedItem = await newItem.save();
        return res.status(201).send(savedItem);
    } catch (error) {
        res.status(500);
        return next(error);
    }
});

// Update an item by id
inventoryRouter.put('/:itemId', async (req, res, next) => {
    try {
        const updatedItem = await Inventory.findByIdAndUpdate(
            req.params.itemId,
            req.body,
            { new: true }
        );
        if (!updatedItem) {
            const error = new Error(`Item with id ${req.params.itemId} was not found`);
            res.status(404);
            return next(error);
        }
        return res.status(200).send(updatedItem);
    } catch (error) {
        res.status(500);
        return next(error);
    }
});

// Delete an item by id
inventoryRouter.delete('/:itemId', async (req, res, next) => {
    try {
        const deletedItem = await Inventory.findByIdAndDelete(req.params.itemId);
        if (!deletedItem) {
            const error = new Error(`Item with id ${req.params.itemId} was not found`);
            res.status(404);
            return next(error);
        }
        return res.status(200).send(deletedItem);
    } catch (error) {
        res.status(500);
        return next(error);
    }
});

module.exports = inventoryRouter;
