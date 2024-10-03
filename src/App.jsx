import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Hero from './components/Hero.jsx'
import Work from './components/Work.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Coding from './components/Coding.jsx'

function App() {
  return (
    <Router>
      <div className='bg-black h-screen'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/codingprofiles' element={<Coding />} />
          {/* Other routes */}
        </Routes>
        <About />
        <Skills />
        <Work />
        <Contact />
        <Footer />
      </div>
    </Router>
  )
}

export default App;
