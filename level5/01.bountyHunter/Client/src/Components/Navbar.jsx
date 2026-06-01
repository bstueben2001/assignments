export default function Navbar() {
    return (
        <nav className="navbar">
            <span className="navbar-brand">Bounty Buddy</span>
            <ul className="navbar-links">
                <li><a href="/">Home</a></li>
                <li><a href="/bounties">Bounties</a></li>
            </ul>
        </nav>
    )
}
