import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = () => {
    return (
        <header>
            <div className="container">
                <nav>
                    <div className="nav-links">
                        <Link to="/">Home</Link>
                        <Link to="/about">About Me</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/resume">Resume</Link>
                        <Link to="/contact">Contact Me</Link>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
