import React,  { useEffect, useState } from 'react';
import '../styles/components/footer.css';



export default function Footer() {
    const [now, timeChange] = useState(new Date())
    setInterval(() => timeChange(new Date()), 1000)

    return (
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
    );
};

