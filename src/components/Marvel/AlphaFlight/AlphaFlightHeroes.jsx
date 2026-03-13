import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import "yet-another-react-lightbox/styles.css";
import { HeroeSlides } from './AlphaFlightHeroesPhotos';
import 
{ 
    Captions, 
    Download,
    Fullscreen,
    Thumbnails,
    Zoom, 
} 
from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/captions.css";

function AlphaFlightHeroes() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button onClick={() => setOpen(true)}>Open Lightbox</button>

            <Lightbox
                plugins={[Captions]}
                open={open}
                slides={HeroeSlides}
                close={() => setOpen(false)}
            />
        </>
    );
}

export default AlphaFlightHeroes;
