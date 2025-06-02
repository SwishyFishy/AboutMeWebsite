import { PropsWithChildren } from "react";

import '../../styles/CVSection.css';

type props_CVSection = {
    title: string
}

function CVSection({title, children}: PropsWithChildren<props_CVSection>)
{
    return(
        <section id={`cv_section`}>
            <h2>{title}</h2>
            {children}
        </section>
    );
}

export default CVSection;