import { useEffect } from "react";
import { PropsWithChildren } from "react";

function CutoffParagraph({children}: PropsWithChildren)
{
    const id: number = 1;

    useEffect(() => {
        const paragraph: string | null = document.getElementsByClassName(id.toString())[0].textContent;
        console.log(paragraph);
    }, []);

    return(
        <div id="cutoff_paragraph">
            <p className={id.toString()}>
                {children}
            </p>
        </div>
    )
}

export default CutoffParagraph;