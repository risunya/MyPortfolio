import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { Projects } from './pages/Projects'
import { NotFound } from './pages/Notfound'
import { Header } from './components/header/Header'
import { Footer } from './components/footer/Footer'

function App() {
  return (
        <>
          <Header/>
            <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/projects' element={<Projects/>}></Route>
              <Route path='*' element={<NotFound/>}></Route>
            </Routes>
          <Footer/>
        </>
  )
}

export default App
