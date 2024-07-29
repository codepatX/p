import React from 'react';
import './hero.css';
import ScrollTop from '../scroll/ScrollTop';
function Hero() {
    return (
        <>
            <div className="hero">
                <div className="hero-content">
                    <h5>expert tips and tricks on</h5>
                    <h1>BEAUTY, MAKEUP & SKINCARE</h1>
                    <div className="search-bar">
                        <input type="text" placeholder="SEARCH AND ENTER" />
                        <button>
                            <i className="fas fa-search"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div className="explore">
                <h2>Explore By Category</h2>
                <div className="cards">
                    <div className="card card-1">
                        <div className="card-content">
                            <h3>SKIN CARE</h3>
                        </div>
                        <button className="explore-more">EXPLORE MORE</button>
                    </div>
                    <div className="card card-2">
                        <div className="card-content">
                            <h3>MAKEUP TIPS</h3>
                        </div>
                        <button className="explore-more">EXPLORE MORE</button>
                    </div>
                    <div className="card card-3">
                        <div className="card-content">
                            <h3>FOR BRIDES</h3>
                        </div>
                        <button className="explore-more">EXPLORE MORE</button>
                    </div>
                </div>
            </div>
            <div className="blog">
                <h2>SYLLI'S BEAUTY BLOG</h2>
                <p>Discover the latest trends, tips, and tricks in the world of beauty, makeup, and skincare. Stay updated with expert advice and insights from industry professionals.</p>
                <div className="blog-cards">
                    <div className="blog-card blog-card-1"></div>
                    <div className="blog-card blog-card-2">
                        <button className="read-more">READ THE POST</button>
                    </div>
                </div>
            </div>
           
            <ScrollTop/>

        </>
    );
}

export default Hero;
