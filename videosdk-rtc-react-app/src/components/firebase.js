
import { useEffect, useState } from "react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCWf86SuAbS5Rus76MC9vLPsgLnh0Y8jcI",
    authDomain: "streame-2e066.firebaseapp.com",
    projectId: "streame-2e066",
    storageBucket: "streame-2e066.appspot.com",
    messagingSenderId: "226823067970",
    appId: "1:226823067970:web:5d90acd31c7c77da35d0db",
    measurementId: "G-DCBP6THP9P"
}

const app =initializeApp(firebaseConfig);
const auth = getAuth()

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
