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
                        <span>Basic care + CPR</span>
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
                <div className="interval">
                    <h3>JCI McDonalds</h3>
                    <span>4 years</span>
                    <span>Shift Manager for 1.5 years</span>
                    <p>
                        I started at JCI McDonalds immediately after graduating highschool in June 2021, delayed by the pandemic. After about a year and a half, I moved up to the Crew Trainer (or Junior Leader) position. There, I trained and verified at least 15 new hires on various stations. After this, I moved up to Area Lead, acting as a station leader for wherever I was positioned in the restaurant. In Janurary 2024, I was fully certified as a Shift Manager. While not the fastest progression, I spent all but the summers working part-time while in school at Trent, and was working full time otherwise.
                    </p>
                </div>
            </section>
            <section id="education">
                <h2>Education</h2>
                <div className="interval">
                    <h3>Highschool</h3>
                    <span>Adam Scott C & V.I., Peterborough, ON</span>
                    <span>GPA 93.26%</span>
                </div>
                <div className="interval">
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