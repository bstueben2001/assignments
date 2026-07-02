import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

export default function IssueCard({ issue, onVote, onDelete }) {
    const { user } = useAuth()
    const upvoted = user && issue.upvotes.includes(user.id)
    const downvoted = user && issue.downvotes.includes(user.id)
    const isOwner = user && issue.userId?._id === user.id

    return (
        <div className="card">
            <h2><Link to={`/issues/${issue._id}`}>{issue.title}</Link></h2>
            <p className="author">by {issue.userId?.username ?? "unknown"}</p>
            <p>{issue.description}</p>
            <div className="vote-row">
                <button
                    type="button"
                    className={`upvote ${upvoted ? "active" : ""}`}
                    disabled={!user}
                    onClick={() => onVote(issue._id, "upvote")}
                >
                    ▲ {issue.upvotes.length}
                </button>
                <button
                    type="button"
                    className={`downvote ${downvoted ? "active" : ""}`}
                    disabled={!user}
                    onClick={() => onVote(issue._id, "downvote")}
                >
                    ▼ {issue.downvotes.length}
                </button>
            </div>
            {isOwner && onDelete && (
                <div className="button-row">
                    <Link to={`/issues/${issue._id}`} className="edit-link">Edit</Link>
                    <button type="button" className="delete" onClick={() => onDelete(issue._id)}>Delete</button>
                </div>
            )}
        </div>
    )
}
