import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer";
import { useState, useEffect} from "react";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import Welcome from "./components/Welcome";

const App = () => {

  return (
    <BrowserRouter>
    <div>
    <Navbar/>
    <Routes>
      <Route path={"/"} element = {<ItemListContainer/>} />
      <Route path={"/category/:id"} element = {<ItemListContainer/>} />
      <Route path={"/item/:id"} element = {<ItemDetailContainer/>} />
    </Routes>
    <Footer/>
    </div> 
    </BrowserRouter>
  );
}


export default App;
