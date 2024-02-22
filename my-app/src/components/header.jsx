import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const HeaderStyled = styled.div`
.header {
  padding-top: 0.5em;
  margin: auto;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
}

.logo {
  color:  white;
  font-size: calc(clamp(2.2em, 3rem, 4rem) * .75); 
  font-style: normal;
  font-weight: 700;
  line-height: 60px; /* 136.364% */
  text-decoration: none;
}

.navbar {
  display: flex;
  align-items: center;  
}

.navbar a {
  padding-left: 25px;
  text-decoration: none;
  color: rgb(255, 255, 255);
  text-align: right;
  font-size: clamp(12px, 1.2rem, 21px);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  transition: 0.3s;
}

.navbar a:hover,
.navbar a.active {
  color: rgb(247, 108, 8);
}`;

const Header = () => {
    const handleClick = (pageTitle) => {
        document.title = pageTitle;
    };

    return (
      <HeaderStyled>
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
      </HeaderStyled>
    );
};

export default Header;