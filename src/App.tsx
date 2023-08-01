import hi from "./animations/hiiii-animate.gif";
import React, { Component, useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import "./App.css";

function App() {
  return (
    <div className="">
      <NavBar></NavBar>
      <div className="flex w-1/2 h-96  ml-48 mt-20 mb-96">
        <div className="relative right-0 top-1/2">
          <h1 className="font-medium font-merriweather text-6xl text-black">
            Hello! I'm <span className="font-cursive text-7xl">Felipe</span>
            <h1 className="font-medium font-merriweather text-black">
              and I'm Multimedia Engineer
            </h1>
          </h1>
        </div>
      </div>
      <div className="relative h-full w-full">
        <div className="absolute bottom-5 right-0">
          <img src={hi} alt="hi" />
        </div>
      </div>
      <div>
        <AboutMe></AboutMe>
      </div>
    </div>
  );
}

export default App;
