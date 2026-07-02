import { useState } from "react"
import { useAuth } from "../context/AuthContext"

function CommentItem({ comment, onUpdate, onDelete }) {
    const { user } = useAuth()
    const [editing, setEditing] = useState(false)
    const [text, setText] = useState(comment.text)
    const isOwner = user && comment.userId?._id === user.id

    async function handleSave() {
        if (!text.trim()) return
        await onUpdate(comment._id, text)
        setEditing(false)
    }

    return (
        <div className="comment">
            <p className="author">{comment.userId?.username ?? "unknown"}</p>
            {editing ? (
                <div className="form">
                    <textarea value={text} onChange={(e) => setText(e.target.value)} />
                    <div className="button-row">
                        <button type="button" onClick={handleSave}>Save</button>
                        <button type="button" onClick={() => setEditing(false)}>Cancel</button>
                    </div>
                </div>
            ) : (
                <p>{comment.text}</p>
            )}
            {isOwner && !editing && (
                <div className="button-row">
                    <button type="button" className="edit" onClick={() => setEditing(true)}>Edit</button>
                    <button type="button" className="delete" onClick={() => onDelete(comment._id)}>Delete</button>
                </div>
            )}
        </div>
    )
}

export default function CommentList({ comments, onUpdate, onDelete }) {
    if (!comments.length) {
        return <p>No comments yet.</p>
    }

    return (
        <div className="comment-list">
            {comments.map((comment) => (
                <CommentItem key={comment._id} comment={comment} onUpdate={onUpdate} onDelete={onDelete} />
            ))}
        </div>
    )
}
