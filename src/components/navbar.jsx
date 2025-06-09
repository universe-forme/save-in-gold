// components/Navbar.jsx
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom'; // Import NavLink and Link
import { cn } from '../lib/utils';

import logo from '../assets/logo.png';
import { Globe } from "lucide-react";

const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Gold Bar Collection', path: '/goldbar-collection' }, // Example path
    { name: 'Our App', path: '/our-app' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Contact', path: '/contact-us' },
    { name: 'Blog', path: '/blogs' },
    { name: 'Sign Ip', path: '/sign-up' },
    { name: 'Sign In', path: '/sign-in' },
];

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    // Define base and active classes for NavLink
    const baseLinkClasses = "text-gray-300 hover:text-white transition-colors";
    const activeLinkClasses = "text-yellow-400 border-b-2 border-yellow-400"; // text-yellow-400 is rgb(250 204 21)

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo-container">
                    {/* Make logo a link to home */}
                    <Link to="/" className="logo-box">
                        <img src={logo} alt="Save Gold Logo" className="w-full h-full object-contain" />
                    </Link>
                </div>

                <div className="nav-links hidden md:flex">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.path}
                            // The className prop can accept a function
                            // to conditionally apply classes based on isActive state
                            className={({ isActive }) =>
                                cn(baseLinkClasses, isActive ? activeLinkClasses : '')
                            }
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </div>

                <div className="action-buttons hidden md:flex">
                    <div className="lang-select">
                        <span><Globe size={20} /></span> {/* Adjusted size for better fit */}
                        <span>EN</span>
                    </div>
                    {/* Assuming Contact Us button might navigate or open a modal. For now, a button. */}
                    <button className="btn-contact">Contact Us</button>
                    <a href={"/sign-in"} className="btn-login">Log In</a>
                </div>

                <button className="menu-toggle md:hidden" onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {isMobileMenuOpen && (
                <div className="mobile-menu md:hidden">
                    <div className="mobile-links">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.path}
                                className={({ isActive }) =>
                                    cn("mobile-link", isActive ? "text-yellow-400" : "text-gray-300")
                                }
                                onClick={() => setMobileMenuOpen(false)} // Close menu on link click
                            >
                                {item.name}
                            </NavLink>
                        ))}
                        <div className="mobile-actions">
                            {/* Consider making these Link components if they navigate */}
                            <button className="btn-contact w-full">Contact Us</button>
                            <a href={"/sign-in"} className="btn-login-mobile w-full">Log In</a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;