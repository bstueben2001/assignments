const express = require("express")
const issueRouter = express.Router()
const Issue = require("../Models/Issue")
const Comment = require("../Models/Comment")
const verifyToken = require("../Middleware/verifyToken")

issueRouter.get("/", async (req, res, next) => {
    try {
        const issues = await Issue.find().populate("userId", "username").sort({ createdAt: -1 })
        return res.send(issues)
    } catch (error) {
        next(error)
    }
})

issueRouter.get("/:id", async (req, res, next) => {
    try {
        const issue = await Issue.findById(req.params.id).populate("userId", "username")
        if (!issue) {
            return res.status(404).send({ errMsg: "Issue not found" })
        }
        return res.send(issue)
    } catch (error) {
        next(error)
    }
})

issueRouter.post("/", verifyToken, async (req, res, next) => {
    try {
        const { title, description } = req.body
        if (!title || !title.trim() || !description || !description.trim()) {
            return res.status(400).send({ errMsg: "Title and description are required" })
        }

        const issue = await Issue.create({
            title,
            description,
            userId: req.user.id
        })
        const populatedIssue = await issue.populate("userId", "username")
        return res.status(201).send(populatedIssue)
    } catch (error) {
        next(error)
    }
})

issueRouter.put("/:id", verifyToken, async (req, res, next) => {
    try {
        const issue = await Issue.findById(req.params.id)
        if (!issue) {
            return res.status(404).send({ errMsg: "Issue not found" })
        }
        if (issue.userId.toString() !== req.user.id) {
            return res.status(403).send({ errMsg: "You can only edit your own issues" })
        }

        const { title, description } = req.body
        if (title !== undefined) issue.title = title
        if (description !== undefined) issue.description = description
        await issue.save()

        const populatedIssue = await issue.populate("userId", "username")
        return res.send(populatedIssue)
    } catch (error) {
        next(error)
    }
})

issueRouter.delete("/:id", verifyToken, async (req, res, next) => {
    try {
        const issue = await Issue.findById(req.params.id)
        if (!issue) {
            return res.status(404).send({ errMsg: "Issue not found" })
        }
        if (issue.userId.toString() !== req.user.id) {
            return res.status(403).send({ errMsg: "You can only delete your own issues" })
        }

        await issue.deleteOne()
        await Comment.deleteMany({ issueId: issue._id })

        return res.send({ msg: "Issue deleted" })
    } catch (error) {
        next(error)
    }
})

issueRouter.put("/:id/upvote", verifyToken, async (req, res, next) => {
    try {
        const issue = await Issue.findById(req.params.id)
        if (!issue) {
            return res.status(404).send({ errMsg: "Issue not found" })
        }

        const userId = req.user.id
        const hasUpvoted = issue.upvotes.some(id => id.toString() === userId)

        issue.downvotes = issue.downvotes.filter(id => id.toString() !== userId)
        if (hasUpvoted) {
            issue.upvotes = issue.upvotes.filter(id => id.toString() !== userId)
        } else {
            issue.upvotes.push(userId)
        }

        await issue.save()
        const populatedIssue = await issue.populate("userId", "username")
        return res.send(populatedIssue)
    } catch (error) {
        next(error)
    }
})

issueRouter.put("/:id/downvote", verifyToken, async (req, res, next) => {
    try {
        const issue = await Issue.findById(req.params.id)
        if (!issue) {
            return res.status(404).send({ errMsg: "Issue not found" })
        }

        const userId = req.user.id
        const hasDownvoted = issue.downvotes.some(id => id.toString() === userId)

        issue.upvotes = issue.upvotes.filter(id => id.toString() !== userId)
        if (hasDownvoted) {
            issue.downvotes = issue.downvotes.filter(id => id.toString() !== userId)
        } else {
            issue.downvotes.push(userId)
        }

        await issue.save()
        const populatedIssue = await issue.populate("userId", "username")
        return res.send(populatedIssue)
    } catch (error) {
        next(error)
    }
})

module.exports = issueRouter
