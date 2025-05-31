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

    const diceRollerArgs: ProjectCardArgs = {
        title: "Dungeons and Dragons Dice App",
        icon: "diceroller.png",
        thumbnail: "A console application for easily saving and rolling sets of dice for D&D characters.",
        repo: "https://github.com/SwishyFishy/DiceRoller"
    }

    const mapCreatorArgs: ProjectCardArgs = {
        title: "Continental Map Generator",
        icon: "mapper.png",
        thumbnail: "A generator for simplistic (yet diverse) continental maps for worldbuilding, D&D, and so on.",
        repo: "https://github.com/SwishyFishy/ContinentMapCreator"
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
            <ProjectCard args={diceRollerArgs}>
                <p>
                    A console application I wrote to easily save and load sets of dice for my D&D character. The user can create custom dice, and custom dice bags, and can roll those dice and/or dice bags with the 'roll' command. The dice can also be saved to and loaded from a JSON file for repeat use. The repo has an exe with an installation guide. To my knowledge, only a few minor bugs remain, mostly to do with insufficient input sanitization.
                </p>
                <p>
                    Doing this project got me learning about the C# JSON Serializer functions and thinking about ways to simplify the representation of complex or self-referential objects for storage as JSON text.
                </p>
            </ProjectCard>
            <ProjectCard args={mapCreatorArgs}>
                <p>
                    A C# Winforms project for generating maps for worldbuilding projects, D&D or other TTRPGs, etc. The app has adjustable sliders for the number and size of provinces and bodies of water, and enough diversity of output to work for continental, provincial, or island/archipelago style maps. The graphics are simple, and there's no 'loading' indicator, but I'm quite proud of the outputs it produces.
                </p>
                <p>
                    There's also code for generating rivers, but I've never been happy with how they look. For now they're hardcoded to be disabled by overriding the MAX and MIN values for NUM_RIVERS in the UpdateGenerationSettings function in Generation.cs.
                </p>
            </ProjectCard>
        </div>
    );
}

export default Projects;