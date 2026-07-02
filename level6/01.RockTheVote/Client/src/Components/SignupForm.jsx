import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

export default function SignupForm() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const { signup } = useAuth()
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()
        setError("")
        try {
            await signup(username, password)
            navigate("/")
        } catch (err) {
            setError(err.message)
        }
    }

    return (
        <div className="container narrow">
            <h1>Sign up</h1>
            <form onSubmit={handleSubmit} className="form">
                <label>
                    Username
                    <input value={username} onChange={(e) => setUsername(e.target.value)} required />
                </label>
                <label>
                    Password
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </label>
                {error && <p className="error">{error}</p>}
                <button type="submit">Sign up</button>
            </form>
            <p>Already have an account? <Link to="/login">Log in</Link></p>
        </div>
    )
}
