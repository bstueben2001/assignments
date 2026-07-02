import { useEffect, useState } from "react"
import { issueApi } from "../api/api"
import { useAuth } from "../context/AuthContext"
import IssueCard from "./IssueCard"

export default function Profile() {
    const { user, token } = useAuth()
    const [issues, setIssues] = useState([])
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        issueApi.getAll()
            .then((all) => setIssues(all.filter((issue) => issue.userId?._id === user.id)))
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false))
    }, [user.id])

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

    async function handleDelete(id) {
        try {
            await issueApi.remove(token, id)
            setIssues(issues.filter((issue) => issue._id !== id))
        } catch (err) {
            setError(err.message)
        }
    }

    return (
        <div className="container">
            <h1>{user.username}'s issues</h1>
            {error && <p className="error">{error}</p>}
            {loading ? (
                <p>Loading...</p>
            ) : issues.length === 0 ? (
                <p>You haven't posted any issues yet.</p>
            ) : (
                <div className="card-list">
                    {issues.map((issue) => (
                        <IssueCard key={issue._id} issue={issue} onVote={handleVote} onDelete={handleDelete} />
                    ))}
                </div>
            )}
        </div>
    )
}
