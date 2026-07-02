import { useEffect, useState } from "react"
import { issueApi } from "../api/api"
import { useAuth } from "../context/AuthContext"
import IssueCard from "./IssueCard"

export default function Home() {
    const [issues, setIssues] = useState([])
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(true)
    const { user, token } = useAuth()

    useEffect(() => {
        issueApi.getAll()
            .then(setIssues)
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false))
    }, [])

    async function handleCreate(e) {
        e.preventDefault()
        setError("")
        if (!title.trim() || !description.trim()) {
            setError("Title and description cannot be empty")
            return
        }
        try {
            const newIssue = await issueApi.create(token, title, description)
            setIssues([newIssue, ...issues])
            setTitle("")
            setDescription("")
        } catch (err) {
            setError(err.message)
        }
    }

    async function handleVote(id, direction) {
        try {
            const updated = direction === "upvote"
                ? await issueApi.upvote(token, id)
                : await issueApi.downvote(token, id)
            setIssues(issues.map((issue) => (issue._id === id ? updated : issue)))
        } catch (err) {
            setError(err.message)
        }
    }

    return (
        <div className="container">
            <h1>Issues</h1>
            {user && (
                <form onSubmit={handleCreate} className="form">
                    <label>
                        Title
                        <input value={title} onChange={(e) => setTitle(e.target.value)} />
                    </label>
                    <label>
                        Description
                        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
                    </label>
                    <button type="submit">Post issue</button>
                </form>
            )}
            {error && <p className="error">{error}</p>}
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="card-list">
                    {issues.map((issue) => (
                        <IssueCard key={issue._id} issue={issue} onVote={handleVote} />
                    ))}
                </div>
            )}
        </div>
    )
}
