import { useState, useEffect } from "react";
import { PropsWithChildren } from "react";

import Popup from "../components/Popup";

function CutoffParagraph({children}: PropsWithChildren)
{
    // Set up the state
    const [fullText, setFullText] = useState<string>("");
    const [cutText, setCutText] = useState<string>("");
    const [showFullText, setShowFullText] = useState<boolean>(false);

    // Cut the text
    useEffect(() => {

        // Error checking
        if (typeof children !== "string")
        {
            throw new TypeError("CutoffParagraph children must be a string, not a ReactNode or HTMLElement");
        }
        
        // Set the cut and full texts by splitting the cut text at the first period
        setFullText(children);
        setCutText(children.split('.', 1)[0] + "...");
    }, []);

    // Show the full text
    const handleShowText = (e: any) => {
        e.preventDefault();
        setShowFullText(true);
    }

    return(
        <div id="cutoff_paragraph">
            <p onClick={handleShowText}>
                {cutText}
            </p>
            <Popup type="window" display={showFullText} setDisplay={setShowFullText}>{fullText}</Popup>
        </div>
    )
}

export default CutoffParagraph;