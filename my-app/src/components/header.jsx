import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/header.css'

const Header = () => {
    const handleClick = (pageTitle) => {
        document.title = pageTitle;
    };

    return (
        <div className="head-wrapper">
        <header className="header">
          <a href="home" className="logo" onClick={() => handleClick("Home")}>Aleshkin</a>
  
          <nav className="navbar">
            <Link to="../home" onClick={() => handleClick("Home")}>Home</Link>
            <Link to="../work" onClick={() => handleClick("Works")}>Works</Link>
            <Link to="../blog" onClick={() => handleClick("Blog")}>Blog</Link>
            <Link to="../contact" onClick={() => handleClick("Contact")}>Contact</Link>
          </nav>  
        </header>
      </div>
    );
};

export default Header;