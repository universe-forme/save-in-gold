import React from "react";
import heroImg1 from "../assets/hero-1.jpg";
import heroImg2 from "../assets/hero-2.jpg";
import {href} from "react-router-dom";

const IndexHeroSection = () => {
    return (
        <section className="hero-section">
            {/* Background Image Overlay */}
            <div className="hero-bg-overlay">
                <a href="/">
                    <img src={heroImg1} alt="Gold Bars" className="hero-bg-img" />
                </a>
            </div>

            {/* Blurred Yellow Glows */}
            <div className="hero-blur-glow">
                <div className="blur-circle-1" />
                <div className="blur-circle-2" />
            </div>

            {/* Main Content */}
            <div className="hero-content-wrapper">
                <div className="hero-grid">
                    {/* Text Block */}
                    <div className="hero-text">
                        <h1 className="hero-heading font-cinzel">
                            <span className="text-white">Luxury You Can</span>
                            <br />
                            <span className="text-white">Hold. Value You</span>
                            <br />
                            <span className="text-white">Can Trust.</span>
                        </h1>
                        <p className="hero-description">
                            Rooted in tradition and refined through innovation, our gold reflects the heritage of the UAE while meeting the highest global standards of purity and value.
                        </p>
                        <button className="hero-button">Buy Now</button>
                    </div>

                    {/* Image Block with Layered Glow */}
                    <div className="hero-image-wrapper">
                        <div className="hero-image-layer bg-layer-1" />
                        <div className="hero-image-layer bg-layer-2" />
                        <div className="hero-image-actual">
                            <img src={heroImg2} alt="Gold Bars" className="hero-img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IndexHeroSection;
