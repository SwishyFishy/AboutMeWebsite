import { useState } from "react";
import { PropsWithChildren } from "react";

import ExternalLink from "../ExternalLink";
import Popup from "../Popup";

import "../../styles/ProjectCard.css";

export type ProjectCardArgs = {
    title: string,
    icon: string,
    thumbnail: string,
    link?: string
}

type props_ProjectCard = {
    args: ProjectCardArgs
}

function ProjectCard({args, children}: PropsWithChildren<props_ProjectCard>)
{
    const {title, icon, thumbnail, link} = args;
    const [showPopup, setShowPopup] = useState<boolean>(false);
    
    // Show the full text
    const handleShowPopup = (e: any) => {
        e.preventDefault();
        setShowPopup(true);
    }

    return(
        <div id="project_card">
            <h2>{title}</h2>

            <div className={children ? "dohover thumbnail" : "thumbnail"} onClick={handleShowPopup}>
                <img src={icon} alt={`Thumbnail image for ${title} repository`} width="230" height="225"/>
                <span>{thumbnail} {children ? <i>(Read More)</i> : ""}</span>
            </div>
            { children ? <Popup type="window" display={showPopup} setDisplay={setShowPopup}>{children}</Popup> : ""}

            {link ? <ExternalLink href={link}>See More</ExternalLink> : ""}
        </div>
    );
}

export default ProjectCard;