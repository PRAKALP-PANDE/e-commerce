import React from 'react'
// import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import AddProduct from './components/AddProduct';
// import ProductsList from './components/ProductsList';
// import { useState } from "react";
import Admin from './components/Admin';
// import Productitems from './components/ProductItems';
import Product from './components/Product';
import Yourcart from './components/Yourcart';
import Nav from './Nav';
// import DisplayProducts from './components/DisplayProducts';


function App() {
  return (

    <Router>
      <div className="App">
        {/* <Header /> */}
        <Nav/>
        <Routes>
          {/* <Route path='/' element={<><Home /> <Productitems/> </>} /> */}
          <Route path='/' element={<><Home /> <Product/> </>} />
          {/* <Route exact path="/" element={<Home />} /> */}
          <Route path="/admin" element={<Admin />} />
          <Route path="/yourcart" element={<Yourcart/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
