import NavButton from '../NavButton';

import '../../styles/Header.css';

function Header()
{
    return(
        <div id="header">
            <header>
                <h1>Jonah Galloway-Fenwick</h1>
                <nav>
                    <NavButton url="/" title="About Me"/>
                    <NavButton url="/cv" title="My Cv"/>
                    <NavButton url="/contact" title="Contact Me"/>
                    <NavButton url="/projects" title="Projects"/>
                </nav>
            </header>
        </div>
    );
}

export default Header;