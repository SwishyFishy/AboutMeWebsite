import ProjectCard from "../components/page/ProjectCard";

import "../styles/Projects.css";

function Projects()
{
    return(
        <div id="projects">
            <ProjectCard title="My GitHub" icon="github.png" repo="https://github.com/SwishyFishy">
                Lorem ipsum dolor sit amet and so on and so forth, consectitur and something-or-other.
                Lorem ipsum dolor sit amet and so on and so forth, consectitur and something-or-other.
                Lorem ipsum dolor sit amet and so on and so forth, consectitur and something-or-other.
            </ProjectCard>
        </div>
    );
}

export default Projects;