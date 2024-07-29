import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './nav.css';
import Hero from '../hero/hero';
import BookOnline from '../bookOnline/bookOnline';
import Contact from '../contact/contact';
import About from '../about/about';
import Services from '../services/services';
import Gallery from '../gallery/gallery';
// import  ScrollTop from '../scroll/ScrollTop'

function Nav() {
    return (

       <>
       {/* <ScrollTop/> */}
        <Router>
            <nav className="navbar">
                <ul className="navbar-links-left">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/services">Services</Link></li>
                </ul>
                <div className="navbar-center">
                    <Link to="/">Sylli's Beauty Aesthetics Clinic</Link>
                </div>
                <ul className="navbar-links-right">
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/booking">Boo Online</Link></li>
                </ul>
            </nav>

            
            <TransitionGroup>
            <CSSTransition key={location.key} classNames="fade" timeout={300}>

            <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/booking" element={<BookOnline />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/gallery" element={<Gallery />} />
            </Routes>
            </CSSTransition>

            </TransitionGroup>
        </Router>
       </>



    );
}

export default Nav;
