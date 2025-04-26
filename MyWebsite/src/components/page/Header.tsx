import NavButton from "../NavButton";

import '../../styles/Header.css';

function Header()
{
    return(
        <div id="header">
            <nav>
                <NavButton value="About Me" onClick={function(){}}/>
                <NavButton value="My CV" onClick={function(){}}/>
                <NavButton value="Contact Me" onClick={function(){}}/>
                <NavButton value="Small Projects" onClick={function(){}}/>
                <NavButton value="Large Projects" onClick={function(){}}/>
            </nav>
        </div>
    );
}

export default Header;