import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import "yet-another-react-lightbox/styles.css";

function AlphaFlightVillans() 
{
    const [open, setOpen] = useState(false);

    return (
        <>
            <button onClick={() => setOpen(true)}>Open Lightbox</button>

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={[
                    { src: "https://picsum.photos/id/1015/600/400" },
                    { src: "https://picsum.photos/id/1016/600/400" },
                    { src: "https://picsum.photos/id/1018/600/400" }
                ]}
            />
        </>
    );
}

export default AlphaFlightVillans;
