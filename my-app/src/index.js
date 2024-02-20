import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import {createGlobalStyle} from 'styled-components';

const Global = createGlobalStyle `

@import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz@9..40&display=swap');  

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  background: #1C1D20;
  color: white;
  display: block;
  margin: 0 auto;
  font-family: 'DM Sans', sans-serif;
}
`

const root = createRoot(document.getElementById('root'));
root.render(
    <>
        <Global/>
        <App/>
        </>
);