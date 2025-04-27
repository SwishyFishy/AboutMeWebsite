import { NavLink } from 'react-router';

import '../styles/NavButton.css';

type props_NavButton = {
    url: string;
    title: string;
}

function NavButton({url, title}: props_NavButton)
{
    return(
        <NavLink 
        className={({ isActive}: {isActive: boolean}) => 
            isActive ? "active nav_button" : "nav_button"
        } 
        to={url}>
            {title}
        </NavLink>
    );
}

export default NavButton;