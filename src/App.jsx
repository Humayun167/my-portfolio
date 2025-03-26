import './App.css'
import About from './Components/About/About'
import Contact from './Components/Contact/contect'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Qualification from './Components/Qualification/Qualification'
import Services from './Components/Services/Services'
import Skills from './Components/Skills/Skills'
// import Work from './Components/Work/Work'

function App() {
  
  return (
    <>
      <Header></Header>
      <main>
        <Home></Home>
        <About></About>
        <Skills></Skills>
        <Services></Services>
        <Qualification></Qualification>

        {/* <Work></Work> */}
        <Contact></Contact>
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
// alldone