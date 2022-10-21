import React from "react";
import styles from './style';
import {Navbar2,CreateMeeting } from './components';


const StartStreaming = () => {
    return (
        <div className="bg-primary text-white w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.fexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar2/>
          </div>
        </div>
        <div className="bg-primary">
            <CreateMeeting/>
        </div>
        
    </div>
    );
  }
   
  export default StartStreaming;