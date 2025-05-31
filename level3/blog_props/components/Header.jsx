

export default function Header(){

    const Navbar = 
        <div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Sample Post</li>
                <li>Contact</li>
            </ul>
        </div>
    

    return (
        <div>
            <h3>Start Bootstrap</h3>
            <h3>{Navbar}</h3>
            <h1>Clean Blog</h1>
            <h2>A Blog Theme by Start Bootstrap</h2>
        </div>
        
    )
}