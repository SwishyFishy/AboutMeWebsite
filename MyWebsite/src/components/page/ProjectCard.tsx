import { useState } from "react";
import { PropsWithChildren } from "react";

import Popup from "../Popup";

import "../../styles/ProjectCard.css";

export type ProjectCardArgs = {
    title: string,
    icon: string,
    thumbnail: string,
    repo?: string,
    link?: string
}

type props_ProjectCard = {
    args: ProjectCardArgs
}

function ProjectCard({args, children}: PropsWithChildren<props_ProjectCard>)
{
    const {title, icon, thumbnail, repo, link} = args;
    const [showPopup, setShowPopup] = useState<boolean>(false);
    
    // Show the full text
    const handleShowPopup = (e: any) => {
        e.preventDefault();
        setShowPopup(true);
    }

    return(
        <div id="project_card">
            <h2>{title}</h2>
            <img src={icon} alt={`Thumbnail image for ${title} repository`} width="230" height="225"/>

            <span className={children ? "dohover" : ""} onClick={handleShowPopup}>{thumbnail} {children ? <i>(Read More)</i> : ""}</span>
            { children ? <Popup type="window" display={showPopup} setDisplay={setShowPopup}>{children}</Popup> : ""}

            {repo ? <a rel="external" target="__blank" href={repo}>&gt;Repository&lt;</a> : ""}
            {link ? <a rel="external" target="__blank" href={link}>&gt;Live Site&lt;</a> : ""}
        </div>
    );
}

export default ProjectCard;