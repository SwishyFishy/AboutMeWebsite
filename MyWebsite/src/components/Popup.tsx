import { useState } from "react";
import { PropsWithChildren } from "react";

import '../styles/Popup.css';

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
    display: boolean
}

function Popup({type, display,children}: PropsWithChildren<props_Popup>)
{
    // Track whether popup should be open or closed
    const [open, setOpen] = useState<boolean>(display);

    // Close the popup
    const handleClose = (e: any) => {
        e.preventDefault();
        setOpen(false);
    }

    return(
        <div id="popup" className={[open ? "visible" : "hidden", typeof type == "string" ? type : "custom"].join(' ')}>
            {children}
            <input type="submit" id="close" name="close" value="X" onClick={(e: any) => handleClose(e)}/>
        </div>
    );
}

export default Popup;