import { NavLink } from "react-router";

import '../../styles/Header.css';

function Header()
{
    return(
        <div id="header">
            <header>
                <h1>Jonah Galloway-Fenwick</h1>
                <nav>
                    <NavLink className="nav" to="/">About Me</NavLink>
                    <NavLink className="nav" to="/cv">My CV</NavLink>
                    <NavLink className="nav" to="/contact">Contact Me</NavLink>
                    <NavLink className="nav" to="/smallprojects">Small Projects</NavLink>
                    <NavLink className="nav" to="/largeprojects">Large Projects</NavLink>
                </nav>
            </header>
        </div>
    );
}

export default Header;