import logo from './logo.svg';
import './App.css';
import React from "react";
import ReactDOM from "react-dom";
import {
  Routes,
  Route
} from "react-router-dom";
import FrontChannel from './FrontChannel';
import Home from './Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/frontchannel' element={<FrontChannel />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
