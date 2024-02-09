import React from 'react';
import '../styles/app.css';

export const Profile = () => {
    const handleDownload = () => {
      const downloadLink = document.createElement("a");
      downloadLink.href = "./assets/resume.pdf"; // Укажите правильный путь к файлу для скачивания
      downloadLink.download = "AleshkinAV.pdf"; // Укажите имя файла
    
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    };
    return (
        <div className="main-wrapper">
        <section className="greetings">
          <div className="about-me">
            <h1>Hi, I am Andrey, Frontend Developer</h1>
            <h3>
              A passionate frontend developer with a creative approach to coding
              and an inspiration to create engaging web applications using
              cutting-edge technologies.
            </h3>
            <button className="cv-button" onClick={handleDownload}>Download CV</button>
          </div>

          <img
            src="/assets/designer.png" 
            alt="альтернативный текст"
            className="p-image"
          />
        </section>
      </div>
    );  
};
