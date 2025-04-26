import { PropsWithChildren } from "react";

import '../../styles/TabbedFolder.css';

function TabbedFolder({children}: PropsWithChildren)
{
    return(
        <div id="tabbed_folder">
            {children}
        </div>
    );
}

export default TabbedFolder;