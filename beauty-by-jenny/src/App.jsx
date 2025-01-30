import './App.css'
import { Header } from './components/Header'
import Nav from './components/Nav'
import About from './components/About'
import WorkPictures from './components/WorkPictures'
import Services from './components/Services'
import Location from './components/Location'


function App() {


  return (
    <>
    <Header />
    <Nav />
      <About />
      <WorkPictures />
   <Services />
   <Location />
    </>
  )
}

export default App
