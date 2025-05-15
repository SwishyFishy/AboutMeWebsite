import CaptionedPicture from "../components/CaptionedPicture";

import '../styles/AboutMe.css';

function AboutMe()
{
    return(
        <div id="about_me">
            <CaptionedPicture caption="" image="me.png" alt="A picture of Jonah"/>
            <div>
                <h2>About Me</h2>
                <p>
                    Hi there! I'm Jonah, a recent Trent University computer science graduate and current full-time shift manager at JCI McDonalds in Peterborough, ON, Canada.
                </p>
                <p>
                    Perhaps unsurprisingly, I enjoy programming. I'm especially fond of data management and algorithm design, but I'm also quite fond of front and backend web development. I've also dabbled in machine learning before, and would like to do more of it. In my free time, I like to play video games (mainly roguelikes and story-driven action/FPS games) and Magic: the Gathering.
                </p>
                <p>
                    I attended Trent University for 4 years between 2021 and 2025, graduating with a BSc in Computer Sciences and an overall GPA frustratingly close to 90%. While obviously I mainly studied computer science, I also took several math and philosophy courses to fill out my electives. During that time, in addition to my job at JCI, I also ran the institutiuon's Magic: the Gathering club. I rebuilt it from the shell that I inherited upon my arrival into a small but flourishing community by the time I left.
                </p>
                <p>
                    I'm currently working at JCI McDonalds as a full-time shift manager. I started in June of 2021, and reached my current position in January of 2024. I've become something of a specialist - informally, at least - regularly closing a location in a Walmart superstore. I have very few team members and a lot of responsibilities to attend to, ensuring that we don't stay late and everything is ready for the next day's open. I'm proud to say that I'm very good at it.
                </p>
            </div>
        </div>
    );
}

export default AboutMe;