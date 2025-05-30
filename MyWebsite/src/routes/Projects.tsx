import ProjectCard from "../components/page/ProjectCard";
import { ProjectCardArgs } from "../components/page/ProjectCard";

import "../styles/Projects.css";

function Projects()
{
    const githubArgs: ProjectCardArgs = {
        title: "My GitHub",
        icon: "github.png",
        thumbnail: "My GitHub homepage.",
        repo: "https://github.com/SwishyFishy"
    }

    const trackerArgs: ProjectCardArgs = {
        title: "MtG Swiss Tournament Tracker", 
        icon: "tracker.png",
        thumbnail: "Tournament software for Magic: the Gathering drafts.",
        repo: "https://github.com/SwishyFishy/SwissTournamentTracker"
    }

    return(
        <div id="projects">
            <ProjectCard args={githubArgs}></ProjectCard>
            <ProjectCard args={trackerArgs}>
                <p>
                    A webapp I built over the 2024/2025 Christmas break for running Swiss-style tournaments for Magic: the Gathering. It uses a React frontend and an Express backend to host and matchmake for the Swiss-style tournament structure used for MtG draft events. I ran Trent University's Magic: the Gathering club at the time, and I built the application because I found the Companion App developed by Magic's owner's Wizards of the Coast lacked some features I needed. I also wasn't happy with the last React app I'd built and wanted some personal redemption. The code isn't clean - there are a lot of things I'd do differently if I started over now - but considering it was built from scratch in 3 weeks I'm very happy with the result.
                </p>
                <p>
                    The backend, built in Express, was designed as a REST API with endpoints to create and manage tournaments. It also uses the socket.io library to automatically push updates to connected clients. This way, the event administrator can create the event and advance the rounds at will, whilst being automatically updated with the most recent match scores as players finish their games. For the players, the experience is simple and straightforward, as match information and next opponents is automatically forwarded to them when each round starts.
                </p>
                <p>
                    The frontend supports both the players and the administrator of the event. The players are presented with their match information and are able to input the result. The administrator sees live-updated match scores and can remove players from the event if necessary.
                </p>
                <div className="gallery">
                    <img src="tracker_hostview.png"/>
                    <img src="tracker_playerview_round.png"/>
                    <img src="tracker_leaderboard.png"/>
                </div>
            </ProjectCard>
        </div>
    );
}

export default Projects;