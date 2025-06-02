import CaptionedPicture from "../components/CaptionedPicture";
import { AboutMe_Main } from "../static_content/AboutMe_Main";

import '../styles/AboutMe.css';

function AboutMe()
{
    return(
        <div id="about_me">
            <CaptionedPicture caption="" image="me.png" alt="A picture of Jonah"/>
            <div>
                <h2>About Me</h2>
                <AboutMe_Main/>
            </div>
        </div>
    );
}

export default AboutMe;