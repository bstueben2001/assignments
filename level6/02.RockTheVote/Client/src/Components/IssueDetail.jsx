import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { commentApi, issueApi } from "../api/api"
import { useAuth } from "../context/AuthContext"
import CommentForm from "./CommentForm"
import CommentList from "./CommentList"

export default function IssueDetail() {
    const { id } = useParams()
    const { user, token } = useAuth()
    const navigate = useNavigate()

    const [issue, setIssue] = useState(null)
    const [comments, setComments] = useState([])
    const [error, setError] = useState("")
    const [editing, setEditing] = useState(false)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    useEffect(() => {
        issueApi.getOne(id)
            .then((data) => {
                setIssue(data)
                setTitle(data.title)
                setDescription(data.description)
            })
            .catch((err) => setError(err.message))

        // Fetch all comments and filter to this issue, per spec
        commentApi.getAll()
            .then((all) => setComments(all.filter((c) => c.issueId === id)))
            .catch((err) => setError(err.message))
    }, [id])

    async function handleVote(direction) {
        try {
            const updated = direction === "upvote"
                ? await issueApi.upvote(token, id)
                : await issueApi.downvote(token, id)
            setIssue(updated)
        } catch (err) {
            setError(err.message)
        }
    }

    async function handleIssueSave() {
        try {
            const updated = await issueApi.update(token, id, title, description)
            setIssue(updated)
            setEditing(false)
        } catch (err) {
            setError(err.message)
        }
    }

    async function handleIssueDelete() {
        try {
            await issueApi.remove(token, id)
            navigate("/")
        } catch (err) {
            setError(err.message)
        }
    }

    async function handleCommentCreate(text) {
        try {
            const newComment = await commentApi.create(token, id, text)
            setComments([...comments, newComment])
        } catch (err) {
            setError(err.message)
        }
    }

    async function handleCommentUpdate(commentId, text) {
        try {
            const updated = await commentApi.update(token, commentId, text)
            setComments(comments.map((c) => (c._id === commentId ? updated : c)))
        } catch (err) {
            setError(err.message)
        }
    }

    async function handleCommentDelete(commentId) {
        try {
            await commentApi.remove(token, commentId)
            setComments(comments.filter((c) => c._id !== commentId))
        } catch (err) {
            setError(err.message)
        }
    }

    if (error && !issue) return <div className="container"><p className="error">{error}</p></div>
    if (!issue) return <div className="container"><p>Loading...</p></div>

    const isOwner = user && issue.userId?._id === user.id
    const upvoted = user && issue.upvotes.includes(user.id)
    const downvoted = user && issue.downvotes.includes(user.id)

    return (
        <div className="container">
            <div className="card">
                {editing ? (
                    <div className="form">
                        <label>
                            Title
                            <input value={title} onChange={(e) => setTitle(e.target.value)} />
                        </label>
                        <label>
                            Description
                            <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
                        </label>
                        <div className="button-row">
                            <button type="button" onClick={handleIssueSave}>Save</button>
                            <button type="button" onClick={() => setEditing(false)}>Cancel</button>
                        </div>
                    </div>
                ) : (
                    <>
                        <h1>{issue.title}</h1>
                        <p className="author">by {issue.userId?.username ?? "unknown"}</p>
                        <p>{issue.description}</p>
                    </>
                )}

                <div className="vote-row">
                    <button
                        type="button"
                        className={`upvote ${upvoted ? "active" : ""}`}
                        disabled={!user}
                        onClick={() => handleVote("upvote")}
                    >
                        ▲ {issue.upvotes.length}
                    </button>
                    <button
                        type="button"
                        className={`downvote ${downvoted ? "active" : ""}`}
                        disabled={!user}
                        onClick={() => handleVote("downvote")}
                    >
                        ▼ {issue.downvotes.length}
                    </button>
                </div>

                {isOwner && !editing && (
                    <div className="button-row">
                        <button type="button" className="edit" onClick={() => setEditing(true)}>Edit</button>
                        <button type="button" className="delete" onClick={handleIssueDelete}>Delete</button>
                    </div>
                )}
            </div>

            {error && <p className="error">{error}</p>}

            <h2>Comments</h2>
            {user && <CommentForm onSubmit={handleCommentCreate} />}
            <CommentList comments={comments} onUpdate={handleCommentUpdate} onDelete={handleCommentDelete} />
        </div>
    )
}
