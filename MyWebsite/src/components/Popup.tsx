import { useState } from "react";

import { PropsWithChildren } from "react";

import '../styles/Popup.css';

type props_Popup = {
    display: boolean
}

function Popup({display, children}: PropsWithChildren<props_Popup>)
{
    // Track whether popup should be open or closed
    const [open, setOpen] = useState<boolean>(display);

    // Close the popup
    const handleClose = (e: any) => {
        e.preventDefault();
        setOpen(false);
    }

    return(
        <div id="popup" className={open ? "" : "hidden"}>
            {children}
            <input type="submit" id="close" name="close" value="X" onClick={(e: any) => handleClose(e)}/>
        </div>
    );
}

export default Popup;