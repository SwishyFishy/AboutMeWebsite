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
                    <li><span>Collaborator or Independent Worker</span></li>
                    <li><span>Customer Service</span></li>
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
                        <span>Javascript, TypeScript, Node, Express, PHP</span>
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
                        I started at JCI McDonalds in June 2021. After about a year and a half, I moved up to the Crew Trainer (or Junior Leader) position. There, I trained and verified at least 15 new hires on various stations. In Janurary 2024, I was fully certified as a Shift Manager. 
                    </p>
                    <p>
                        During school, I worked a part-time 20h per week schedule. Over the summer months, and as of my graduation, I've worked full-time 40h weeks. As a shift manager, it's my job to run the store for the duration of my shift, utilizing the crew I'm given to complete all of the tasks while still delivering an excellent customer experience.
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
            <section id="extracurricular">
                <h2>Extracurricular Experience</h2>
                <div className="interval">
                    <h3>Trent Magic the Gathering Community</h3>
                    <span>3 years</span>
                    <p>
                        The Trent Magic the Gathering Community, or TMTGC, is Trent University's Magic: the Gathering club. When I joined in my first year it was nearly dead - its founding members had all left the year prior, leaving a single 4th year student in charge, who had no interest in advertising or rebuilding a playerbase. I took sole control when he graduated that year, and I'm very proud to say that the club completely recovered.
                    </p>
                    <p>
                        Over the course of the three years that I ran the club, we increased from 3 to 18 regular attendees. I worked with the TCSA, the body at Trent which oversees student clubs, to secure advertising and funding for the club and the activities I ran. I also mentored two lower-year students to take over the executive role I filled upon my graduation, and thus far they've done an excellent job.
                    </p>
                    <h4>Responsibilities</h4>
                    <ul>
                        <li>Owner, administrator, and moderator of the TMTGC Discord server, which hosted over 100 prospective, current, or former members.</li>
                        <li>Organize general meetings and special club events, including completing and submitting accurate Risk Assessments to club oversight.</li>
                        <li>Communicate with club oversight at the TCSA to secure on-campus storage for club effect, funding for events, and reserve room space.</li>
                        <li>All paperwork and bureaucracy related to club upkeep and annual re-registration.</li>
                        <li>Select and mentor replacements for my departure.</li>
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