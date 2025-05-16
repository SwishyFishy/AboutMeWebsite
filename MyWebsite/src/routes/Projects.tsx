import ProjectCard from "../components/page/ProjectCard";
import CutoffParagraph from "../components/CutoffParagraph";

import "../styles/Projects.css";

function Projects()
{
    return(
        <div id="projects">
            <ProjectCard title="My GitHub" icon="github.png" repo="https://github.com/SwishyFishy">
                <CutoffParagraph id="card1">
                    My GitHub homepage.
                </CutoffParagraph>
            </ProjectCard>
        </div>
    );
}

export default Projects;