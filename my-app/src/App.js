import { createGlobalStyle } from 'styled-components';
import React, { useEffect, useState } from "react";
import { LoadingPlaceholder, MainContent } from "./pages/Loading";
import { keyframes } from 'styled-components';
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

.main-content-container {
  opacity: 0; /* Начальное состояние: невидимый */
  animation: fadeInFromBottom 1s ease-out forwards;
}

@keyframes fadeInFromBottom {
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
`

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showMainContent, setShowMainContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      // После того, как заглушка скрыта, показываем основной контент
      setTimeout(() => {
        setShowMainContent(true);
      }, 100); // Задержка для завершения анимации
    }
  }, [isLoading]);

  return (
    <React.StrictMode>
      <GlobalStyles />
      <div className="container">
        {isLoading ? (
          <div className="loading-placeholder">
            <LoadingPlaceholder />
          </div>
        ) : (
          <div className="main-content-container">
            {showMainContent && <MainContent />}
          </div>
        )}
      </div>
    </React.StrictMode>
  );
}

export default App;