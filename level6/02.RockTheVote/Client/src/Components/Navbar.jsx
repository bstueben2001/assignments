import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

export default function Navbar() {
    const { user, logout } = useAuth()
    const navigate = useNavigate()

    function handleLogout() {
        logout()
        navigate("/")
    }

    return (
        <nav className="navbar">
            <Link to="/" className="brand">RockTheVote</Link>
            <div className="nav-links">
                {user ? (
                    <>
                        <Link to="/profile">{user.username}</Link>
                        <button type="button" onClick={handleLogout}>Log out</button>
                    </>
                ) : (
                    <>
                        <Link to="/login">Log in</Link>
                        <Link to="/signup">Sign up</Link>
                    </>
                )}
            </div>
        </nav>
    )
}
