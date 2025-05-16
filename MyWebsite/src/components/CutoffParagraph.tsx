import { useState, useEffect } from "react";
import { PropsWithChildren } from "react";

type props_CutoffParagraph = {
    id: string
}

function CutoffParagraph({id, children}: PropsWithChildren<props_CutoffParagraph>)
{
    // Set up the state
    const [fullText, setFullText] = useState<string>("");
    const [cutText, setCutText] = useState<string>("");

    // Cut the text
    useEffect(() => {
        
        // Error checking
        if (typeof children !== "string")
        {
            throw new TypeError("CutoffParagraph children must be a string, not a ReactNode or HTMLElement");
        }
        
        setFullText(children);
        setCutText(children.split('.', 1)[0] + "...");
    }, []);

    return(
        <div id="cutoff_paragraph">
            <p id={id}>
                {cutText}
            </p>
        </div>
    )
}

export default CutoffParagraph;