import React from "react";
import '../styles/components/feedback.css';

export const Feedback = () => {
    return (
        <main>
      <div className="main-wrapper">
        <div className="main-header">
          <div className="main-left-text">Let's make software together</div>
          <div className="mail-logo"><img src='/assets/envelope.png'/></div>
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
            <button className="q-button"><a>Send it!</a></button>
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
            <div className="group-block"><a href="#" className="group-info">Telegram</a></div>
            <div className="group-block"><a href="#" className="group-info">LinkedIn</a></div>
            <div className="group-block"><a href="#" className="group-info">GitHub</a></div>
            <div className="group-block"><a href="#" className="group-info">VKontakte</a></div>
          </div>

        </div>

      </div>

    </main>
    )
}