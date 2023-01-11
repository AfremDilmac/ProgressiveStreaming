

import { stats } from "../../constants";
import { useState, useEffect } from "react";
import styles from "../../style";
import { collection, doc, setDoc, getDocs } from "firebase/firestore"; 
import { db } from "../../firebase";

const Stats =  () => {
  const aantalUsers = document.getElementById("users");
  const btnUsers = document.getElementById("btnDisplay");
  let aantal = 0;
  async function testUsers(){
    const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  
    aantal = aantal + 1;
  });
  console.log(aantal);
  aantalUsers.innerHTML = aantal;
  btnUsers.style.display = "none";
  }

  testUsers();

  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6 flexusers`}>
      <div className={`flex-1 flex justify-start items-center flex-row m-3`} >
        <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
          Aantal users
        </h4>
        <button id="btnDisplay" className="bg-purple-500 ml-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={Stats}>Display</button>
        <p id="users" className="font-poppins font-normal xs:text-[20.45px] text-[30.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
        </p>
      </div>
    
  </section>
)};

export default Stats;

