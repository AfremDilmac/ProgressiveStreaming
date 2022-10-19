import React from "react";
import styles from './style';
import {SignIn, SignUp, Navbar } from './components';


const Signup = () => {
    return (
        <div className="bg-primary text-white w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.fexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar/>
          </div>
        </div>
        <SignIn/>
        <SignUp/>
    </div>
    );
  }
   
  export default Signup;