import { createGlobalStyle } from 'styled-components';
import React, { useEffect, useState } from "react";
import { LoadingPlaceholder, MainContent } from "./pages/Loading";

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


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <React.StrictMode>
      <GlobalStyles />
      <div className="container">
        {isLoading ? (
          <div className="loading-placeholder">
            <LoadingPlaceholder />
          </div>
        ) : (
          <MainContent /> 
        )}
      </div>
    </React.StrictMode>
  );
}

export default App;