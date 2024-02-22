import React from "react";
import styled from "styled-components";

const FeedbackStyled = styled.div`
.main-wrapper {
  color: white;
  padding: 150px 0 150px 0;
  margin: 0 auto;
  max-width: 1000px;
}

.main-header {
  display: flex;
  justify-content: space-between;
}

.main-left-text {
  font-style: normal;
  font-size: clamp(3em, 5vw, 7em);
  font-weight: 450;
  letter-spacing: normal;
  display: flex;
  align-items: center;
}

.mail-logo img {
  max-height: 200px;
}

.contact-form {
  margin: 0 auto;
  max-width: 1100px;
  display: flex;
  justify-content: space-between;
}

.send-form {
  width: 68%;
}

.contact-question {
  border-top: 1px solid grey;
  padding: 35px;
}

.question-label {
  color: white;
  font-size: 2.33em;
}

.question-field {
  padding: 15px;
}

.question-field input{
  appearance: none;
  background-color: #1C1D20;;
  border: none; 
  box-shadow: none;
  outline:none;
  width: 100%;
  font-size: 1.8em;
  color: white;
}

.question-error {
  color: #1C1D20;
  display: none;
}

.question-button {
  margin-top: 50px;
  display: flex;
  justify-content: center;
  padding: 15px;
}

.q-button {
  border: solid 2px grey;
  border-radius: 20px;
  padding: 10px 20px 10px 20px;
  background:grey;
  transition: 0.4s;
  font-size: 2.33em;
}

.q-button:hover {
  border: solid 2px rgb(247, 108, 8);
  border-radius: 20px;
  background: rgb(247, 108, 8);
}

.q-button a {
  text-decoration: none;
  color: white;
  transition: 0.4s;
}

.q-button:hover a {
  text-decoration: none;
  color: black;
}

.contact-details {
  width: 22%;
  display: flex;
  flex-direction:column;  
}

.details-group {
  padding: 25px;
}

.group-caption {
  font-size: 0.8em;
  color: grey;
}

.group-block {
  margin: 15px;
}

.group-info {
  text-decoration: none;
  color: white;
  font-size: 1.2em;
  padding: 10px;
  transition: 0.4s;
}

.group-info:hover {
border-bottom: 1px grey;
color: rgb(231, 199, 157);
}`

export const Feedback = () => {
    return (
      <FeedbackStyled>
        <main>
      <div className="main-wrapper">
        <div className="main-header">
          <div className="main-left-text">Let's make software together</div>
          <div className="mail-logo"><img src='/assets/envelope.png' alt="developer"/></div>
         </div>
      </div>

      <div className="contact-form">
        <div className="send-form">

          <div className="contact-question">
            <div className="question-label">What is your name?</div>
            <div className="question-field"><input type="text" placeholder="Andrey*"/></div>
            <div className="question-error">Please enter a valid name</div>
          </div>

         <div className="contact-question">
            <div className="question-label">What is your email?</div>
            <div className="question-field"><input type="text" placeholder="andrey@mail.com*"/></div>  
            <div className="question-error">Please enter a valid email</div>
          </div>

          <div className="contact-question">
            <div className="question-label">What's the name of your organization?</div>
            <div className="question-field"><input type="text" placeholder="Yandex, Avito, etc."/></div>
            <div className="question-error">Please enter a valid organization</div>
          </div>

          <div className="contact-question">
            <div className="question-label">Your message</div>
            <div className="question-field"><input type="text" placeholder="Hello Andrey, can we talk aboout ..."/></div>
            <div className="question-error">Please enter a valid text</div>
          </div>
          
          <div className="question-button">
            <button className="q-button"><a href="/">Send it!</a></button>
          </div>
    
        </div>

        <div className="contact-details"> 
          
          <div className="details-group">
            <div className="group-caption">Contact details</div>
            <div className="group-info">risunya@yandex.ru</div>
            <div className="group-info">+79312096709</div>
          </div>

          <div className="details-group">
            <div className="group-caption">Socials</div>
            <div className="group-block"><a href="/" className="group-info">Telegram</a></div>
            <div className="group-block"><a href="/" className="group-info">LinkedIn</a></div>
            <div className="group-block"><a href="/" className="group-info">GitHub</a></div>
            <div className="group-block"><a href="/" className="group-info">VKontakte</a></div>
          </div>

        </div>

      </div>

    </main>
    </FeedbackStyled>
    )
}