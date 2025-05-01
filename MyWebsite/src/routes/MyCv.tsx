import '../styles/MyCV.css';

function MyCv()
{
    return(
        <div id="my_cv">
            <section id="me">
                <h2>Core Attributes</h2>
            </section>
            <section id="skills">
                <h2>Skills</h2>
                <ul>
                    <li>
                        <span>Bilingual</span>
                        <span>English and French</span>
                    </li>
                    <li>
                        <span>First Aid</span>
                    </li>
                    <li>
                        <span>Management</span>
                    </li>
                    <li>
                        <span>Web Development</span>
                        <span>HTML, CSS, JavaScript, TypeScript, React, PHP</span>
                    </li>
                    <li>
                        <span>Data Structures</span>
                        <span>Java, C#</span>
                    </li>
                    <li>
                        <span>Machine Learning</span>
                        <span>C, C++</span>
                    </li>
                    <li>
                        <span>Other Languages</span>
                        <span>Python</span>
                    </li>
                </ul>
            </section>
            <section id="education">
                <h2>Education</h2>
            </section>
            <section id="work">
                <h2>Work Experience</h2>
            </section>
        </div>
    );
}

export default MyCv;