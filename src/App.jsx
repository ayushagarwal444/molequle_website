import './App.css'
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home'
import Products from "./pages/Products/Products"
import {  BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './pages/Industries/Main';
import Pharma from './pages/Pharma/Pharma';
import About from './pages/AboutUs/About';
import PageNot from './pages/PageNotFound/PageNotFound';
import Neutra from "./pages/Pharma/Neutra"



function App() {
 
  return (
    <>
    
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path='/industry' element={<Main/>}/>
        <Route exact path='/pharma' element={<Pharma/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/nutraceutical' element={<Neutra/>}/>
        
        <Route exact path='*' element={<PageNot/>}/>

      </Routes>
    </BrowserRouter>
     
      
    </>
  )
}

export default App
