import React from "react";
import './services.css';
import ScrollTop from "../scroll/ScrollTop";


function Services(){
    return(
        <>
<div id="services" className="services">
            <h2>Our Services</h2>
            <div className="services-container">
                <div className="service">
                    <img src="service-image-1.jpg" alt="Skin Care" />
                    <h3>Skin Care</h3>
                    <p>Experience rejuvenating skin care treatments that leave your skin glowing and healthy.</p>
                </div>
                <div className="service">
                    <img src="service-image-2.jpg" alt="Makeup" />
                    <h3>Makeup</h3>
                    <p>Get the perfect look for any occasion with our professional makeup services.</p>
                </div>
                <div className="service">
                    <img src="service-image-3.jpg" alt="Bridal" />
                    <h3>Bridal</h3>
                    <p>Make your special day unforgettable with our exquisite bridal beauty packages.</p>
                </div>
            </div>
        </div>
        <ScrollTop/>
        </>
    )
}


export default Services;