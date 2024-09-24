import React from "react";
import Navbar from "./components/nevber/Navbar";
import Hero from "./components/Hero/Hero";
import Brands from "./components/Brands/Brands";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Banner2 from "./components/Banner/Banner2";
// import CursorComponent from "./components/cursorComponent/CursorComponent";
import { useState, useEffect } from "react";
import CursorComponent from "./components/cursorComponent/CursorComponent";



const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Brands />
        <Services />
        <Banner />
        <Banner2 />
      <CursorComponent />
      </div>
    </>
  );
};
export default App;
