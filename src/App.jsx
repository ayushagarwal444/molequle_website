import './App.css'
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home'
import Products from "./pages/Products/Products"
import { HashRouter } from "react-router-dom";
import {  Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/products" element={<Products />} />
      </Routes>
    </HashRouter>
    </>
  )
}

export default App
