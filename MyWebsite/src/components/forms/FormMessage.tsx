import { PropsWithChildren } from "react";

type props_FormMessage = {
    display: boolean
    active?: boolean
}

function FormMessage({display, active = undefined, children}: PropsWithChildren<props_FormMessage>)
{
    return(
        <span className={display && active ? "italics" : "hidden"}>{children}</span>
    );
}

export default FormMessage;