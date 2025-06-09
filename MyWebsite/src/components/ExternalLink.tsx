import { PropsWithChildren } from "react";

import '../styles/ExternalLink.css';

type props_DownloadLink = {
    href: string
}

function ExternalLink({href, children}: PropsWithChildren<props_DownloadLink>)
{
    return(
        <a id="external_link" href={href} target="__blank">{children}</a>
    )
}

export default ExternalLink;