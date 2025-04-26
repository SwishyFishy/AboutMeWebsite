import '../styles/NavButton.css';

type props_NavButton = {
    value: string;
    onClick: Function;
}

function NavButton(props: props_NavButton)
{
    return(
        <input type="button" name="nav_button" id="nav_button" value={props.value} onClick={() => {props.onClick();}}></input>
    );
}

export default NavButton;