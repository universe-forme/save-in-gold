import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { cn } from '../lib/utils';

import logo from '../assets/logo.png';
import { Globe } from "lucide-react";

const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Gold Bar Collection', path: '/goldbar-collection' },
    { name: 'Our App', path: '/our-app' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Contact', path: '/contact-us' },
    { name: 'Blog', path: '/blogs' },
];

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const toggleButtonRef = useRef(null);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                isMobileMenuOpen &&
                menuRef.current &&
                !menuRef.current.contains(event.target) &&
                toggleButtonRef.current &&
                !toggleButtonRef.current.contains(event.target)
            ) {
                setMobileMenuOpen(false);
            }
        };

        if (isMobileMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMobileMenuOpen]);

    const baseLinkClasses = "text-gray-300 hover:text-white transition-colors hover:no-underline";
    const activeLinkClasses = "text-[#DFB94A] border-b-2 border-[#DFB94A]"; // Used for active state

    return (
        <nav className="navbar relative">
            <div className="navbar-container">
                <div className="logo-container">
                    <Link to="/" className="logo-box">
                        <img src={logo} alt="Save Gold Logo" className="w-full h-full object-contain" />
                    </Link>
                </div>

                <div className="nav-links hidden md:flex">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.path}
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
                        <span><Globe size={20} /></span>
                        <span>EN</span>
                    </div>
                </div>

                <button
                    ref={toggleButtonRef}
                    className="menu-toggle md:hidden"
                    onClick={toggleMobileMenu}
                    aria-label="Toggle mobile menu"
                    aria-expanded={isMobileMenuOpen}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {isMobileMenuOpen && (
                <div
                    ref={menuRef}
                    className="mobile-menu md:hidden absolute top-full left-0 right-0 bg-black z-50 shadow-lg"
                >
                    <div className="mobile-links px-4 py-2">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.path}
                                className={({ isActive }) =>
                                    cn(
                                        "mobile-link block py-2 transition-colors", // Added transition-colors
                                        isActive ? activeLinkClasses : "text-gray-300", // Apply activeLinkClasses here
                                        "hover:no-underline hover:text-white"
                                    )
                                }
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.name}
                            </NavLink>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;