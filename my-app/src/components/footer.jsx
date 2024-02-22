import React,  { useState } from 'react';
import styled from 'styled-components';


const FooterStyled = styled.div`
.footer-wrapper {
    color: white;
    padding-top: 150px;
    padding-bottom: 25px;
    margin: 0 auto;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
  }
  
  .wrapper-left-block {
    display: flex;
    width: 54%;
  }
  
  .wrapper-right-block {
    width: 32%;
    display: inline;
  }
  
  .footer-caption {
    padding: 8px;
    font-size: 0.7em;
    color: grey;
  }
  
  .footer-info {
    padding: 8px;
  }
  
  .footer-info p#time {
    margin: 0;
  }
  
  .footer-link {
    padding-right: 15px;
    transition: 0.3s;
    text-decoration: none;
    color: white;
  }
  
  .footer-link:hover {
    color: rgb(231, 199, 157);
  }
`
export default function Footer() {
    const [now, timeChange] = useState(new Date())
    setInterval(() => timeChange(new Date()), 1000)

    return (
        <FooterStyled>
        <footer className="footer-wrapper">

            <div className="wrapper-left-block">
            <div className="footer-block"> 
                <div className="footer-caption">VERSION</div>
                <div className="footer-info">2024 Edition</div>
            </div>
            <div className="footer-block">  
                <div className="footer-caption">LOCAL TIME</div>
                <div className="footer-info">{now.toLocaleTimeString()}</div>
            </div>
            </div>
    
            <div className="wrapper-right-block">
            <div className="footer-block">  
                <div className="footer-caption">SOCIALS</div>
                <div className="footer-info">
                <a className="footer-link" href="https://www.linkedin.com/in/andrey-aleshkin-41a600266/">LinkedIn</a>
                <a className="footer-link" href="https://github.com/risunyaaa">GitHub</a>
                <a className="footer-link" href="https://web.telegram.org/k/#@risunya">Telegram</a>
                <a className="footer-link" href="https://twitter.com/RISUNYAAA">X (Twitter)</a>
                </div>
            </div>
            </div>

         </footer>
         </FooterStyled>
    );
};

