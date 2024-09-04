import CardList from "./components/Card";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Moments from "./components/Moments";
import Home from "./components/Home";


// import React, { useState } from 'react';

function App() {

  return (

    <div>
      <NavBar />
      <Home/>
      <Moments />
      <div>
      <CardList />
    </div>
      {/* <Footer/> */}
    </div>

  );
}

export default App;
