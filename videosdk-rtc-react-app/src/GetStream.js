import React from "react";
import styles from './style';
import {Navbar2, CurrentMeeting  } from './components';



const GetStream = () => {
    return (
        <div className="bg-primary text-white w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.fexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar2/>
          </div>
        </div>
        <div className="bg-primary">
            <CurrentMeeting/>
        </div>
        
    </div>
    );
  }
   
  export default GetStream;