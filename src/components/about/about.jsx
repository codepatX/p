import React from 'react';
import './about.css';
import ScrollTop from '../scroll/ScrollTop';

function About(){
    return(
        <>
 <div id="about-us" className="about-us">
            <h2>About Us</h2>
            <div className="about-section">
                <p>Welcome to Sylli's Beauty Aesthetics Clinic, where beauty meets elegance. Our mission is to provide exceptional beauty and skincare services to help you look and feel your best.</p>
            </div>
            <div className="mission-section">
                <h3>Our Mission</h3>
                <p>At Sylli's Beauty Aesthetics Clinic, our mission is to enhance your natural beauty through expert care and personalized treatments. We strive to create a relaxing and luxurious environment where you can unwind and rejuvenate.</p>
            </div>
            <div className="team-section">
                <h3>Meet Our Team</h3>
                <div className="team-members">
                    <div className="team-member">
                        <img src="team-member-1.jpg" alt="Team Member 1" />
                        <h4>Jane Doe</h4>
                        <p>Founder & Lead Esthetician</p>
                    </div>
                    <div className="team-member">
                        <img src="team-member-2.jpg" alt="Team Member 2" />
                        <h4>John Smith</h4>
                        <p>Senior Makeup Artist</p>
                    </div>
                    <div className="team-member">
                        <img src="team-member-3.jpg" alt="Team Member 3" />
                        <h4>Sarah Lee</h4>
                        <p>Skincare Specialist</p>
                    </div>
                </div>
            </div>
        </div>

        <ScrollTop/>
        </>
    )
    
}



export default About;