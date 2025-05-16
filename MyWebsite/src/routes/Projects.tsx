import ProjectCard from "../components/page/ProjectCard";

import "../styles/Projects.css";

function Projects()
{
    return(
        <div id="projects">
            <ProjectCard title="My GitHub" icon="github.png" repo="https://github.com/SwishyFishy">
                My GitHub.
            </ProjectCard>
            <ProjectCard title="Placeholder" icon="me.png" repo="https://github.com/SwishyFishy">
                Lorem ipsum dolor sit amet, and so on and so forth.
                Lorem ipsum dolor sit amet, and so on and so forth.
                Lorem ipsum dolor sit amet, and so on and so forth.
            </ProjectCard>
        </div>
    );
}

export default Projects;