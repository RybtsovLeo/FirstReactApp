import logo from './logo.svg';
import React, {Component} from "react";
import './App.css';
import {findAllByDisplayValue} from "@testing-library/react";
import Header from "./components/Header/header";
import NavBar from "./components/NavBar/navBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Diaologs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
  <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <NavBar />
        <div className="app-wrapper-main">
            {/*<Profile />*/}
          <Routes>
            <Route path='/Profile' element={<Profile />} />
            <Route path='/Dialogs' element={<Dialogs />} />
          </Routes>

        </div>
    </div>
  </BrowserRouter>
  );
}

export default App;
