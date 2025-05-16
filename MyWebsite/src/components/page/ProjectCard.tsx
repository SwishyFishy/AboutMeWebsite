import { PropsWithChildren } from "react";

import CutoffParagraph from "../CutoffParagraph";

import "../../styles/ProjectCard.css";

type props_ProjectCard = {
    title: string,
    icon: string,
    repo: string
}

function ProjectCard({title, icon, repo, children}: PropsWithChildren<props_ProjectCard>)
{
    return(
        <div id="project_card">
            <h2>{title}</h2>
            <img src={icon} alt={`Thumbnail image for ${title} repository`} width="230" height="225"/>
            {
                (children as string).split('.').length - 1 > 1 ? 
                <CutoffParagraph>{children}</CutoffParagraph> :
                <p>{children}</p>
            }
            <a rel="external" target="__blank" href={repo}>&gt;Repository&lt;</a>
        </div>
    );
}

export default ProjectCard;