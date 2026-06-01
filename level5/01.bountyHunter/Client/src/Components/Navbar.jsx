import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar">
            <span className="navbar-brand">Bounty Buddy</span>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/bounties">Bounties</Link></li>
            </ul>
        </nav>
    )
}
