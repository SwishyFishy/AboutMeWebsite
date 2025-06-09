import CVSection from '../components/page/CVSection';
import DownloadLink from '../components/DownloadLink';
import { CV_Me } from '../static_content/CV_Me';
import { CV_Skills } from '../static_content/CV_Skills';
import { CV_Work } from '../static_content/CV_Work';
import { CV_Extracurricular } from '../static_content/CV_Extracurricular';
import { CV_School } from '../static_content/CV_School';

import '../styles/MyCV.css';

function MyCv()
{
    return(
        <div id="my_cv">
            <div>
                <h2>My Resume</h2>
                <DownloadLink href="CV.pdf" download="jonahgallowayfenwick_cv">Download the PDF</DownloadLink>
            </div>
            <div>
                <CVSection title="Core Skills and Attributes">
                    <CV_Me/>
                </CVSection>
                <CVSection title="Proficiencies">
                    <CV_Skills/>
                </CVSection>
                <CVSection title="Work Experience">
                    <CV_Work/>
                </CVSection>
                <CVSection title="Extracurricular Experience">
                    <CV_Extracurricular/>
                </CVSection>
                <CVSection title="Education">
                    <CV_School/>
                </CVSection>
            </div>
        </div>
    );
}

export default MyCv;