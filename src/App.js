import logo from './logo.svg';
import './App.css';
import React from "react";
import ReactDOM from "react-dom";
import {
  Routes,
  Route
} from "react-router-dom";
import FrontChannel from './FrontChannel';
import FrontChannelStart from './FrontChannelStart';
import FrontChannelState from './FrontChannelState';
import Home from './Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/frontchannel' element={<FrontChannel />} />
        <Route path='/frontchannel/start' element={<FrontChannelStart />} />
        <Route path='/frontchannel/state' element={<FrontChannelState />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
