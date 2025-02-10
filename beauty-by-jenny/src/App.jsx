import './App.css'
import { Header } from './components/Header'
import Nav from './components/Nav'
import About from './components/About'
import WorkPictures from './components/WorkPictures'
import Services from './components/Services'
import Location from './components/Location'
import Contact from './components/Contact'
import { FaArrowUp } from "react-icons/fa";

function App() {


  return (
    <>
    <a href="#banner">
    <button id='upArrow'>
    <FaArrowUp />
    </button>
    </a>
    <Header />
    <Nav />
      <About />
      <WorkPictures />
   <Services />
   <Location />
   <Contact />
    </>
  )
}

export default App
