import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import DocBox from './pages/docBox/DocBox';
import Team from './pages/team/Team';
import WhoWeServe from './pages/whoWeServe/WhoWeServe';
import NotFound from './pages/notFound/NotFound';
import NavBar from './components/navBar/NavBar';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='docBox' element={<DocBox/>} />
        <Route path='team' element={<Team/>} />
        <Route path='whoWeServe' element={<WhoWeServe/>} />
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
