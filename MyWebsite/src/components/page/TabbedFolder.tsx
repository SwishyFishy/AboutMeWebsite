import { PropsWithChildren } from "react";

import '../../styles/TabbedFolder.css';

type props_TabbedFolder = {
    tabs: Array<string>
}

function TabbedFolder({tabs, children}: PropsWithChildren<props_TabbedFolder>)
{
    const childrens = document.getElementById("my_cv")?.children.length;
    if (childrens !== tabs.length && childrens !== undefined)
    {
        console.log(childrens, tabs);
    }

    return(
        <div id="tabbed_folder">
            <div className="tablist">
                {tabs.map((tab, index) => (
                    <span key={index}>{tab}</span>
                ))}
            </div>
            {children}
        </div>
    );
}

export default TabbedFolder;