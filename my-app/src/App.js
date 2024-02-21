import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/home.jsx';
import Blog from './pages/blog.jsx';
import Work from './pages/work.jsx';
import Contact from './pages/contact.jsx';



function App() {
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

export default App;
