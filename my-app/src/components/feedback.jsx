import React from "react";
import '../styles/components/feedback.css';

export const Feedback = () => {
    return (
        <main>
      <div class="main-wrapper">
        <div class="main-header">
          <div class="main-left-text">Let's make software together</div>
          <div class="mail-logo"><img src='/assets/envelope.png'/></div>
         </div>
      </div>

      <div class="contact-form">
        <div class="send-form">

          <div class="contact-question">
            <div class="question-label">What is your name?</div>
            <div class="question-field"><input type="text" placeholder="Andrey*"/></div>
            <div class="question-error">Please enter a valid name</div>
          </div>

         <div class="contact-question">
            <div class="question-label">What is your email?</div>
            <div class="question-field"><input type="text" placeholder="andrey@mail.com*"/></div>  
            <div class="question-error">Please enter a valid email</div>
          </div>

          <div class="contact-question">
            <div class="question-label">What's the name of your organization?</div>
            <div class="question-field"><input type="text" placeholder="Yandex, Avito, etc."/></div>
            <div class="question-error">Please enter a valid organization</div>
          </div>

          <div class="contact-question">
            <div class="question-label">Your message</div>
            <div class="question-field"><input type="text" placeholder="Hello Andrey, can we talk aboout ..."/></div>
            <div class="question-error">Please enter a valid text</div>
          </div>
          
          <div class="question-button">
            <button class="q-button"><a>Send it!</a></button>
          </div>
    
        </div>

        <div class="contact-details"> 
          
          <div class="details-group">
            <div class="group-caption">Contact details</div>
            <div class="group-info">risunya@yandex.ru</div>
            <div class="group-info">+79312096709</div>
          </div>

          <div class="details-group">
            <div class="group-caption">Socials</div>
            <div class="group-block"><a href="#" class="group-info">Telegram</a></div>
            <div class="group-block"><a href="#" class="group-info">LinkedIn</a></div>
            <div class="group-block"><a href="#" class="group-info">GitHub</a></div>
            <div class="group-block"><a href="#" class="group-info">VKontakte</a></div>
          </div>

        </div>

      </div>

    </main>
    )
}