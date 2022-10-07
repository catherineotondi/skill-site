import { Link } from "react-router-dom";
const NavBar = () => {
    return ( 
        <nav className="navbar">
            
            <div>
                <Link to="/">HOME</Link>
                <Link to="/new">NEW SKILL</Link>
            </div>

        </nav>
     );
}
 
export default NavBar;