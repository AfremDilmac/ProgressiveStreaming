import React from "react";
import styles from './style';
import {Navbar, DownloadNow, GetPremium, About, Promotion, Stats, Footer, Testimonials, Hero, CreateMeeting, SignIn, SignUp } from './components';

function App() {
  return (
    <div className="bg-primary text-white w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.fexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats/>
          <About/>
          <DownloadNow/>
          <GetPremium/>
          <Testimonials/>
          <Promotion/>
          <Footer/>
        </div>
      </div>
      <CreateMeeting/>
      <SignIn/>
      <SignUp/>
    </div>
  );
}

export default App;