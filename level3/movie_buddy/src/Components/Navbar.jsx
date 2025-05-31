

export default function Navbar(props){

    const {toggleTheme} = props

    return(
        <nav className="nav">
            <h1>MovieBuddy</h1>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </nav>
    )
}