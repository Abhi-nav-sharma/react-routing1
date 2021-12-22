import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import NavBar from './Components/Navbar'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Services from './Pages/Services'

function App() {
  return (
   <BrowserRouter>
     <NavBar/>
     <Route exact path="/"><Home/></Route>
     <Route exact path="/login"><Login/></Route>
     <Route exact path="/contact"><Contact/></Route>
     <Route exact path="/about-us"><About/></Route>
     <Route exact path="/services"><Services/></Route>
   </BrowserRouter>
  )
}

export default App