import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home/Home'
import { Projects } from './pages/Blog/Blog'
import { NotFound } from './pages/NotFound/Notfound'
import { Header } from './components/header/Header'
import { Footer } from './components/footer/Footer'
import { BlogArticle } from './components/blogarticle/BlogArticle'
import { WorkItem } from './components/workitem/WorkItem'

function App() {
  return (
        <>
          <Header/>
            <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/blog' element={<Projects/>}></Route>
              <Route path='*' element={<NotFound/>}></Route>
              <Route element={<BlogArticle/>} path='/blog/article/:articlenumber'></Route>
              <Route element={<WorkItem/>} path='/project/:projectnumber'></Route>
            </Routes>
          <Footer/>
        </>
  )
}

export default App
