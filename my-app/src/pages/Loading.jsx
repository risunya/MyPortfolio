import React, { useEffect } from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './home.jsx';
import Blog from './blog.jsx';
import Work from './work.jsx';
import Contact from './contact.jsx';
import styled from "styled-components";

const LoadingPlaceholderStyled = styled.div`
.wrapper {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(0); /* начальное положение */
  transition: transform 0.5s ease-in-out; /* анимация */
  background-color: black;
}

.wrapper.hidden {
  transform: translateY(-100%);
}

.greetings {
  color: white;
  font-size: 5vh;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.greetings.show {
  opacity: 1;
}

  `

  export function LoadingPlaceholder() {
    useEffect(() => {
      const greetingElement = document.querySelector('.greetings');
      const wrapperElement = document.querySelector('.wrapper');
  
      const timeouts = [  
        { text: 'Hello!', delay: 500 },
        { text: 'Привет!', delay: 1500 },
        { text: 'Hola!', delay: 1700 },
        { text: 'こんにちは!', delay: 1900 },
        { text: '你好!', delay: 2100 }
      ];
  
      timeouts.forEach(({ text, delay }) => {
        setTimeout(() => {
          changeLinkText(text);
        }, delay);
      });
  
      function changeLinkText(newText) {
        if (greetingElement) {
          greetingElement.textContent = newText;
          greetingElement.classList.add('show');
        } else {
          console.log('Элемент с классом "greetings" не найден.');
        }
      }
  
      // Добавляем класс .hidden после всех анимаций текста
      setTimeout(() => {
        wrapperElement.classList.add('hidden');
      }, 2600); // 2600 - это последняя задержка в вашем массиве timeouts
    }, []);
  
    return (
      <div className="main">
      <LoadingPlaceholderStyled>
        <div className="wrapper">
          <h1 className="greetings">Hello!</h1>
        </div>
      </LoadingPlaceholderStyled>
      </div>
    );
  }

export function MainContent() {
   return(
      <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} /> 
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/blog" element={<Blog />} /> 
        <Route path="/work" element={<Work />} /> 
      </Routes>
    </BrowserRouter>
   )    
}