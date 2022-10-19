import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Home';
import Signup from './Signup';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/signup" element={<Signup/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;