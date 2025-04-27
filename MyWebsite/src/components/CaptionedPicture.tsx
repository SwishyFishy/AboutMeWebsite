import '../styles/CaptionedPicture.css';

type props_CaptionedPicture = {
    caption: string;
    image: string;
    alt: string;
}

function CaptionedPicture({caption, image, alt}: props_CaptionedPicture)
{
    return(
        <div id="captioned_picture">
            <figure>
                <img src={image} alt={alt}/>
                <figcaption>{caption}</figcaption>
            </figure>
        </div>
    );
}

export default CaptionedPicture;