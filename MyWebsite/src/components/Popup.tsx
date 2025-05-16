import { useState, useEffect } from "react";
import { PropsWithChildren } from "react";

import '../styles/Popup.css';

/* Currently unimplemented - set custom style using these values for customizable popups */
export type PopupDimensions = {
    width?: number,
    height?: number,
    top?: number,
    bottom?: number,
    left?: number,
    right?: number,
    closeBtnTop?: number,
    closeBtnBottom?: number,
    closeBtnLeft?: number,
    closeBtnRight?: number
}

type props_Popup = {
    type: "alert" | "window" | PopupDimensions,
    display: boolean,
    setDisplay?: Function
}

function Popup({type, display, setDisplay = () => {}, children}: PropsWithChildren<props_Popup>)
{
    // Track whether popup should be open or closed
    const [open, setOpen] = useState<boolean>(display);

    // Update whether the popup is open whenever the parent display control changes
    useEffect(() => {
        setOpen(display);
    }, [display]);

    // Close the popup
    // The Popup maintains its own `open` boolean for cases wherein a popup should only ever be show once (like alert mode)
    // If no setDisplay function is passed, then the Popup can never re-open
    const handleClose = (e: any) => {
        e.preventDefault();
        setOpen(false);
        setDisplay(false);
    }

    return(
        <div id="popup" className={[open ? "visible" : "hidden", typeof type == "string" ? type : "custom"].join(' ')}>
            {children}
            <input type="submit" id="close" name="close" value="X" onClick={(e: any) => handleClose(e)}/>
        </div>
    );
}

export default Popup;