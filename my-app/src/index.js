import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`  

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-size: 16px;
  background: #1C1D20;
  color: black;
  display: block;
  margin: 0 auto;
  font-family: 'DM Sans', sans-serif;
}
`
const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
            <GlobalStyles/>
            <App/>  
            </React.StrictMode>
);