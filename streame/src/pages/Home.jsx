import React from "react";
import styles from '../style';
import {Navbar, DownloadSoon, GetPremium, About, Promotion, Stats, Footer, Testimonials, Hero} from '../components/home';


const Home = () => {
  return (
   <div className="bg-primary text-white w-full overflow-hidden homepage">
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
          <DownloadSoon/>
          <GetPremium/>
          <Testimonials/>
          <Promotion/>
          <Footer/>
        </div>
      </div>
    </div>
  )
}

export default Home