import React from "react";
import '../styles/components/item-profile.css';
 
export const ItemProfile = () => {
    return (
        <div className="item-profile-main-wrapper">
        <section className="item-profile-greetings">
          <div className="item-profile-about-me">
            <h1>Hi, I am Andrey, Frontend Developer</h1>
            <h3>
              A passionate frontend developer with a creative approach to coding
              and an inspiration to create engaging web applications using
              cutting-edge technologies.
            </h3>
            <button className="item-profile-cv-button">
              <a>Download CV</a>
            </button>
          </div>

          <img
            src="../assets/designer.png"
            alt="альтернативный текст"
            className="item-profile-p-image"
          />
        </section>
      </div>
    )
}