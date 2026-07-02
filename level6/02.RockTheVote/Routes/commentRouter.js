const express = require("express")
const commentRouter = express.Router()
const Comment = require("../Models/Comment")
const verifyToken = require("../Middleware/verifyToken")

commentRouter.get("/", async (req, res, next) => {
    try {
        const comments = await Comment.find().populate("userId", "username").sort({ createdAt: 1 })
        return res.send(comments)
    } catch (error) {
        next(error)
    }
})

commentRouter.post("/", verifyToken, async (req, res, next) => {
    try {
        const { text, issueId } = req.body
        if (!text || !text.trim()) {
            return res.status(400).send({ errMsg: "Comment text is required" })
        }
        if (!issueId) {
            return res.status(400).send({ errMsg: "issueId is required" })
        }

        const comment = await Comment.create({
            text,
            issueId,
            userId: req.user.id
        })
        const populatedComment = await comment.populate("userId", "username")
        return res.status(201).send(populatedComment)
    } catch (error) {
        next(error)
    }
})

commentRouter.put("/:id", verifyToken, async (req, res, next) => {
    try {
        const comment = await Comment.findById(req.params.id)
        if (!comment) {
            return res.status(404).send({ errMsg: "Comment not found" })
        }
        if (comment.userId.toString() !== req.user.id) {
            return res.status(403).send({ errMsg: "You can only edit your own comments" })
        }

        const { text } = req.body
        if (!text || !text.trim()) {
            return res.status(400).send({ errMsg: "Comment text is required" })
        }
        comment.text = text
        await comment.save()

        const populatedComment = await comment.populate("userId", "username")
        return res.send(populatedComment)
    } catch (error) {
        next(error)
    }
})

commentRouter.delete("/:id", verifyToken, async (req, res, next) => {
    try {
        const comment = await Comment.findById(req.params.id)
        if (!comment) {
            return res.status(404).send({ errMsg: "Comment not found" })
        }
        if (comment.userId.toString() !== req.user.id) {
            return res.status(403).send({ errMsg: "You can only delete your own comments" })
        }

        await comment.deleteOne()
        return res.send({ msg: "Comment deleted" })
    } catch (error) {
        next(error)
    }
})

module.exports = commentRouter
