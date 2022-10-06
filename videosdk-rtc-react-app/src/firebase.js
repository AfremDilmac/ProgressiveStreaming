
import { useEffect, useState } from "react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

// REACT_APP_APIKEY=AIzaSyCWf86SuAbS5Rus76MC9vLPsgLnh0Y8jcI
// REACT_APP_AUTHDOMAIN=streame-2e066.firebaseapp.com
// REACT_APP_PROJECTID=streame-2e066
// REACT_APP_STORAGEBUCKET=streame-2e066.appspot.com
// REACT_APP_MESSAGINGSENDERID=226823067970
// REACT_APP_APPID=1:226823067970:web:5d90acd31c7c77da35d0db
// REACT_APP_MEASUREMENTID=G-DCBP6THP9P



const firebaseConfig = {
    apiKey: "AIzaSyCWf86SuAbS5Rus76MC9vLPsgLnh0Y8jcI",
    authDomain: "streame-2e066.firebaseapp.com",
    projectId: "streame-2e066",
    storageBucket: "streame-2e066.appspot.com",
    messagingSenderId: "226823067970",
    appId: "1:226823067970:web:5d90acd31c7c77da35d0db",
    measurementId: "G-DCBP6THP9P"
}

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth()

// export default app
export function signup(email, password) {
    createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  
  export function logout() {
    return signOut(auth);
  }
  
  // Custom Hook
  export function useAuth() {
    const [ currentUser, setCurrentUser ] = useState();
  
    useEffect(() => {
      const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
      return unsub;
    }, [])
  
    return currentUser;
  }
