import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import GetStream from "./GetStream";
import Home from './Home';
import Signup from './Signup';
import StartStreaming from "./StartStreaming";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Routes>
            <Route path="/" element={<Home/>}/>
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