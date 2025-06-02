import CVSection from '../components/page/CVSection';
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
    );
}

export default MyCv;