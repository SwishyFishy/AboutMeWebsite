import TabbedFolder from "../components/page/TabbedFolder";
import CaptionedPicture from "../components/CaptionedPicture";

function AboutMe()
{
    return(
        <TabbedFolder>
            <CaptionedPicture caption="" image="me.png" alt="A picture of Jonah"/>
        </TabbedFolder>
    );
}

export default AboutMe;