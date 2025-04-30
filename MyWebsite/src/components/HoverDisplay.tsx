import { PropsWithChildren } from "react";

type props_HoverDisplay = {
    title: string
}

function HoverDisplay({title, children}: PropsWithChildren<props_HoverDisplay>)
{
    return(
        <div id="hover_display">
            <span className="hover">{title}</span>
            <div className="info">
                {children}
            </div>
        </div>
    );
}

export default HoverDisplay;