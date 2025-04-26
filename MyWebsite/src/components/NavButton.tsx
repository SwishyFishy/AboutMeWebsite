import { NavLink } from 'react-router';

import '../styles/NavButton.css';

type props_NavButton = {
    url: string;
    title: string;
}

function NavButton(props: props_NavButton)
{
    return(
        <NavLink 
        className={({ isActive}: {isActive: boolean}) => 
            isActive ? "active nav_button" : "nav_button"
        } 
        to={props.url}>
            {props.title}
        </NavLink>
    );
}

export default NavButton;