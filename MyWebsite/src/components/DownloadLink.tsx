import { PropsWithChildren } from "react";

import '../styles/ExternalLink.css';

type props_DownloadLink = {
    href: string,
    download: string
}

function DownloadLink({href, download, children}: PropsWithChildren<props_DownloadLink>)
{
    return(
        <a id="external_link" href={href} download={download}>{children}</a>
    )
}

export default DownloadLink;