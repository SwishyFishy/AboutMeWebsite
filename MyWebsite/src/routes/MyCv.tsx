import '../styles/MyCV.css';

function MyCv()
{
    return(
        <div id="my_cv">
            <section id="me">
                <h2>Core Attributes</h2>
                <ul>
                    <li><span>Outgoing</span></li>
                    <li><span>Eager Learner</span></li>
                    <li><span>Passionate</span></li>
                    <li><span>Eye For Detail</span></li>
                </ul>
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
                        <span>Coaching</span>
                    </li>
                    <li>
                        <span>Web Development</span>
                        <span>HTML, CSS, JavaScript, TypeScript, React, PHP</span>
                    </li>
                    <li>
                        <span>Data Structures</span>
                        <span>Python, Java, C++, C#</span>
                    </li>
                    <li>
                        <span>Machine Learning</span>
                        <span>C++</span>
                    </li>
                    <li>
                        <span>Scripting</span>
                        <span>Bash, Python, C, C++</span>
                    </li>
                    <li>
                        <span>Games</span>
                        <span>JavaScript, TypeScript, Python, Java, C#</span>
                    </li>
                    <li>
                        <span>Git</span>
                    </li>
                    <li>
                        <span>Excel</span>
                    </li>
                    <li>
                        <span>SQL</span>
                    </li>
                </ul>
            </section>
            <section id="work">
                <h2>Work Experience</h2>
            </section>
            <section id="education">
                <h2>Education</h2>
                <div className="education_interval">
                    <h3>Highschool</h3>
                    <span>Adam Scott C & V.I., Peterborough, ON</span>
                    <span>GPA 93.26%</span>
                </div>
                <div className="education_interval">
                    <h3>University</h3>
                    <span>Trent University, Peterborough, ON</span>
                    <span>B.Sc. Computer Sciences</span>
                    <span>GPA 88.95%</span>
                </div>
            </section>
        </div>
    );
}

export default MyCv;