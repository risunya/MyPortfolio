import React from "react";
import styled from 'styled-components';

const ItemProfileStyled = styled.div`
.item-profile-main-wrapper {
  max-width: 1200px;
  margin: auto;
}

.item-profile-greetings {
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
  margin: 100px;
}

.item-profile-about-me h1 {
  color: white;
  font-size: calc(clamp(2.25em, 4vw, 6em) * .75); 
  font-style: normal;
  font-weight: 700;
  max-width: 500px;
  font-height: 1.065;
}

.item-profile-about-me h3 {
  color: white;
  font-size: calc(clamp(0.75em, 1.4vw, 4em) * .75); 
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  max-width: 550px;
  margin: 25px 0 25px 0;
}

.item-profile-p-image {
  height: 20%;
  width: 20%;
  flex-shrink: 0;
  border-radius: 235px;
}

.item-profile-cv-button {
  border: solid rgb(247, 108, 8);
  border-radius: 3px;
  background: rgb(247, 108, 8);
  margin-top: 30px;
  width: 210px;
  height: 50px;
  color: white;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  transition: 0.4s;
}

.item-profile-cv-button:hover {
  border: solid grey;
  border-radius: 3px;
  background: grey; 
  color: black;
}`;
 
export const ItemProfile = () => {
    return (
      <ItemProfileStyled>
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
              <span>Download CV</span>
            </button>
          </div>

          <img
            src="../assets/designer.png"
            alt="альтернативный текст"
            className="item-profile-p-image" 
          />
        </section>
      </div>  
      </ItemProfileStyled>
    )
}