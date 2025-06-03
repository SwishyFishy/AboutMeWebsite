import { useState, useEffect } from "react";

type props_ImageGallery = {
    images: string[],
    time: number,
    startIndex?: number
}

function ImageGallery({images, time, startIndex = Math.floor(Math.random() * images.length)}: props_ImageGallery)
{
    // Store the currently-displayed image in state
    const [index, setIndex] = useState<number>(startIndex);
    const [image, setImage] = useState<string>(images[0]);

    // Update the image when the index changes
    useEffect(() => {
        setImage(images[index]);
    }, [index]);

    // Cycle through images
    setInterval(() => {
        setIndex(index + 1 == images.length ? 0 : index + 1);
    }, time);

    return(
        <div id="image_gallery">
            <img src={image}/>
        </div>
    );
}

export default ImageGallery;