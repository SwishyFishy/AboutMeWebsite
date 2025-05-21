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
    const [showPopup, setShowPopup] = useState<boolean>(false);
    
    // Show the full text
    const handleShowPopup = (e: any) => {
        e.preventDefault();
        setShowPopup(true);
    }

    return(
        <div id="project_card">
            <h2>{args.title}</h2>
            <img src={args.icon} alt={`Thumbnail image for ${args.title} repository`} width="230" height="225"/>

            <span onClick={handleShowPopup}>{args.thumbnail} <i>(Read More)</i></span>
            <Popup type="window" display={showPopup} setDisplay={setShowPopup}>{children}</Popup>

            {args.repo ? <a rel="external" target="__blank" href={args.repo}>&gt;Repository&lt;</a> : ""}
            {args.link ? <a rel="external" target="__blank" href={args.link}>&gt;Live Site&lt;</a> : ""}
        </div>
    );
}

export default ProjectCard;