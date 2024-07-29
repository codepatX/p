import React from "react";
import './gallery.css';
import ScrollTop from "../scroll/ScrollTop";


function Gallery(){
    return(
        <>
         <div id="gallery" className="gallery">
            <h2>Gallery</h2>
            <div className="gallery-container">
                <div className="gallery-item">
                    <img src="gallery-image-1.jpg" alt="Gallery Image 1" />
                </div>
                <div className="gallery-item">
                    <img src="gallery-image-2.jpg" alt="Gallery Image 2" />
                </div>
                <div className="gallery-item">
                    <img src="gallery-image-3.jpg" alt="Gallery Image 3" />
                </div>
                <div className="gallery-item">
                    <img src="gallery-image-4.jpg" alt="Gallery Image 4" />
                </div>
                <div className="gallery-item">
                    <img src="gallery-image-5.jpg" alt="Gallery Image 5" />
                </div>
                <div className="gallery-item">
                    <img src="gallery-image-6.jpg" alt="Gallery Image 6" />
                </div>
                <div className="gallery-item">
                    <img src="gallery-image-7.jpg" alt="Gallery Image 7" />
                </div>
                <div className="gallery-item">
                    <img src="gallery-image-8.jpg" alt="Gallery Image 8" />
                </div>
            </div>
        </div>  
        <ScrollTop/>
        </>
    )
}

export default Gallery;