import { useState } from "react"

export default function CommentForm({ onSubmit }) {
    const [text, setText] = useState("")
    const [error, setError] = useState("")

    async function handleSubmit(e) {
        e.preventDefault()
        if (!text.trim()) {
            setError("Comment cannot be empty")
            return
        }
        setError("")
        await onSubmit(text)
        setText("")
    }

    return (
        <form onSubmit={handleSubmit} className="form">
            <label>
                Add a comment
                <textarea value={text} onChange={(e) => setText(e.target.value)} />
            </label>
            {error && <p className="error">{error}</p>}
            <button type="submit">Comment</button>
        </form>
    )
}
