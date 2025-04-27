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
                    Hi there! I'm Jonah, a recent Trent University computer science graduate and current full-time shift manager at JCI McDonalds in Peterborough, ON, Canada. This here's a little site I've been working on to show off myself, my projects, and my hobbies. The nav bar at the top can take you to my CV, contact information, and some project galleries.
                </p>
                <p>
                    Perhaps unsurprisingly, I enjoy programming. I'm especially fond of data management and algorithm design, but frontend and backend web development are both entertaining too. I've dabbled in machine learning before, and would like to do more of it. Beyond that, I like video games (mainly roguelikes and action/survial games) and Magic: the Gathering.
                </p>
            </div>
        </div>
    );
}

export default AboutMe;