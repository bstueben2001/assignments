import {Link} from 'react-router-dom'

export default function Navbar(){

    return(
        <div>
            <Link to = "/"><button>Home</button></Link>
            <Link to = "/about"><button>About</button></Link>
            <Link to = "/services"><button>Services</button></Link>
        </div>
    )
};