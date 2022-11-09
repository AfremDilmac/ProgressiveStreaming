import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ChatApp from "./ChatApp";
import Login from "./components/Login";
import Register from "./components/Register";
import GetStream from "./GetStream";
import Home from './Home';
import Signup from './Signup';
import StartStreaming from "./StartStreaming";
import "./style.scss"

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/app" element={<ChatApp/>}/>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/get-streaming" element={<GetStream/>}/>
            <Route path="/start-streaming" element={<StartStreaming/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;