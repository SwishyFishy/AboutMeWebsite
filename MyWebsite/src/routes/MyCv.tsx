import '../styles/MyCV.css';

function MyCv()
{
    return(
        <div id="my_cv">
            <section id="me">
                <h2>Core Attributes</h2>
                <ul>
                    <li><span>Eager to Learn</span></li>
                    <li><span>Eye For Detail</span></li>
                    <li><span>Planning and Organization</span></li>
                    <li><span>Adaptable</span></li>
                    <li><span>Reliable</span></li>
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
                        <span>Emergency Care + CPR</span>
                    </li>
                    <li>
                        <span>Management</span>
                    </li>
                    <li>
                        <span>MS Office</span>
                        <span>Word, Excel</span>
                    </li>
                    <li>
                        <span>Training and Coaching</span>
                    </li>
                    <li>
                        <span>Frontend Web Dev</span>
                        <span>HTML, CSS, JavaScript, TypeScript, React, PHP</span>
                    </li>
                    <li>
                        <span>Backend Web Dev</span>
                        <span>Javascript, TypeScript, Express, PHP</span>
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
                        I started at JCI McDonalds in June 2021. After about a year and a half, I moved up to the Crew Trainer (or Junior Leader) position. There, I trained and verified at least 15 new hires on various stations. In Janurary 2024, I was fully certified as a Shift Manager. I work full-time during the summer months and worked 16-24h per week part-time while attending classes at University.
                    </p>
                    <h4>Responsibilities</h4>
                    <ul>
                        <li>Monitor the store for any safety hazards, either to crew, guests, or food, and react swiftly and appropriately.</li>
                        <li>Deliver positive service for all guests and handle complaints or disputes.</li>
                        <li>Create a plan to execute a shift and adjust in real-time according to sales trends.</li>
                        <li>Ensure that all crew are provided breaks without interrupting the flow of service for guests.</li>
                        <li>Organize the completion of all tasks so that the next shift manager takes over a clean and stocked restaurant with no outstanding issues.</li>
                        <li>Handle money from the tills and the safe to accurately tally and record daily sales.</li>
                    </ul>
                </div>
            </section>
            <section id="education">
                <h2>Education</h2>
                <div className="interval">
                    <h3>B.Sc. Computer Sciences</h3>
                    <span>Trent University, Peterborough, ON</span>
                    <span>GPA 88.90%</span>
                </div>
            </section>
        </div>
    );
}

export default MyCv;