import Navbar from "./components/Navbar"
import ItemListContainer from "./components/ItemListContainer"
import { useState, useEffect} from "react";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcome";

const App = () => {

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>

      <Route exact path="/" element={<Welcome/>}/>
    
    </Routes>
    <ItemListContainer/>
    <Footer/>
    </BrowserRouter>
  )
}


export default App
