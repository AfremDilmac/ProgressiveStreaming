import React from 'react';
import '../offline/offline.css';
import image from '../offline/sadConnection.jpg'; 

function Offline() {
  return (
    <div className="stream-page">
    <h1 className="title">StreaMe</h1>
    <p className="error-message">U heeft geen netwerk verbinding</p>
    <img src={image} alt="Stream Me" className="image"/>
  </div>
  );
}

export default Offline;