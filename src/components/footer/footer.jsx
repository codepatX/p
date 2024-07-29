import React from 'react';
import './footer.css';
function Footer() {
    return (
        <>
            <div className="footer">
                <div className="footer-container">
                    <div className="footer-item call-us">
                        <i className="fas fa-phone-alt"></i> {/* Font Awesome icon for phone */}
                        <div className="footer-text">
                            <h5>HAVE A QUESTION?</h5>
                            <p>Call us on 055-107-4728</p>
                        </div>
                    </div>
                    <div className="footer-item located-in">
                        <i className="fas fa-map-marker-alt"></i> {/* Font Awesome icon for location */}
                        <div className="footer-text">
                            <h5>LOCATED IN</h5>
                            <p>Accra, Ghana</p>
                        </div>
                    </div>
                    <div className="footer-item business-hours">
                        <i className="fas fa-clock"></i> {/* Font Awesome icon for clock */}
                        <div className="footer-text">
                            <h5>BUSINESS HOURS</h5>
                            <p>Mon-Sat, 9am-8pm</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="image-gallery">
                <img src="https://img.freepik.com/free-photo/close-up-smiley-woman-applying-face-cream_23-2149403391.jpg?t=st=1721497858~exp=1721501458~hmac=8331704b332309bc9bde45fcf2ddf357fab878a5d58432aee4f022cdeb2fa840&w=360" alt="Image 1" className="image image-small" />
                <img src="https://img.freepik.com/free-photo/beautiful-blonde-with-lily-flower_144627-28884.jpg?t=st=1721497960~exp=1721501560~hmac=4719efb74b7a251c91d94801985ecfea6f2da79da8dd75ab339e46c79864e67f&w=900" alt="Image 2" className="image" />
                <img src="https://img.freepik.com/free-photo/beauty-spa_144627-46180.jpg?t=st=1721496770~exp=1721500370~hmac=124b71ff9a9d6c9f0e351809d00eb5ed4b7addadfca97f2bf9a2250ac3d0e125&w=900" alt="Image 3" className="image" />
                <img src="https://img.freepik.com/premium-photo/portrait-beautiful-woman_173770-957.jpg?w=360" alt="Image 4" className="image" />
                <img src="https://cdn.pixabay.com/photo/2018/09/19/10/54/woman-3688219_1280.jpg" alt="Image 5" className="image" />
                <img src="https://cdn.pixabay.com/photo/2016/06/16/14/37/skincare-1461395_1280.jpg" alt="Image 6" className="image" />
                <img src="https://img.freepik.com/premium-photo/portrait-beautiful-woman_173770-975.jpg?w=360" alt="Image 7" className="image" />
                <img src="https://img.freepik.com/free-photo/portrait-woman-interacting-with-fruits_23-2151626827.jpg?t=st=1721497894~exp=1721501494~hmac=3cdba86e53aa10c840cacc36f08a887e21b876b9f84b7a87f50c762e3206993b&w=360" alt="Image 8" className="image image-small" />
            </div>

            <div className="links-container">
            <a href="#home" className="link">Home</a>
            <a href="#about" className="link">About</a>
            <a href="#services" className="link">Services</a>
            <a href="#blog" className="link">Blog</a>
            <a href="#gallery" className="link">Gallery</a>
            <a href="#contact" className="link">Contact</a>
           <a  className="link">Book Online</a>
            </div>
        <footer className="foot">
            <div className="foot-left">
                <h5>Sylli's Beauty Aesthetics Clinic</h5>
                <p>Discover beauty and elegance.</p>
            </div>
            <div className="foot-center">
                <h5>Follow Us</h5>
                <div className="social-icons">
                    <a href="#facebook"><i className="fab fa-facebook-f"></i></a>
                    <a href="#twitter"><i className="fab fa-twitter"></i></a>
                    <a href="#instagram"><i className="fab fa-instagram"></i></a>
                    <a href="#linkedin"><i className="fab fa-linkedin-in"></i></a>
                </div>
            </div>
            <div className="foot-right">
                <h5>Subscribe to our newsletter</h5>
                <div className="subscribe-form">
                    <input type="email" placeholder="Enter your email" />
                    <button type="submit">Subscribe</button>
                </div>
            </div>
        </footer>
        </>
    )

}


export default Footer;