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
import Sheet from './Sheet';
import FrontChat from './FrontChat';
import FrontWinner from './FrontWinner';
import Lab from './Lab';
import GameShow from './GameShow';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/lab' element={<Lab />} />
        <Route path='/frontchannel' element={<FrontChannel />} />
        <Route path='/frontchannel/start' element={<FrontChannelStart />} />
        <Route path='/frontchannel/state' element={<FrontChannelState />} />
        <Route path='/frontchannel/winner' element={<FrontWinner />} />
        <Route path='/frontchat' element={<FrontChat />} />
        <Route path='/sheet' element={<Sheet />} />
        <Route path='/gameshow' element={<GameShow />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
