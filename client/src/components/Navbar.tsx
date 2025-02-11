import { Link } from "react-router-dom";

const NavBar=()=>{

    return(
        <div className="bg-green">
            <a href=""><img src="" alt="Mimosa"></img></a>
            <div className="items-end">
            <Link to="">About</Link>
            <Link to="">Menu</Link>
            <Link to="">Catering</Link>
            <Link to="">Find Us</Link>
            <Link to="">Contact</Link>
            </div>

        </div>
    )
}

export default NavBar;