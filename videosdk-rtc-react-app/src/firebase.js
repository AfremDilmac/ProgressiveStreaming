import firebase from "firebase/app"
import "firebase/auth"

// REACT_APP_APIKEY=AIzaSyCWf86SuAbS5Rus76MC9vLPsgLnh0Y8jcI
// REACT_APP_AUTHDOMAIN=streame-2e066.firebaseapp.com
// REACT_APP_PROJECTID=streame-2e066
// REACT_APP_STORAGEBUCKET=streame-2e066.appspot.com
// REACT_APP_MESSAGINGSENDERID=226823067970
// REACT_APP_APPID=1:226823067970:web:5d90acd31c7c77da35d0db
// REACT_APP_MEASUREMENTID=G-DCBP6THP9P



const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyCWf86SuAbS5Rus76MC9vLPsgLnh0Y8jcI",
    authDomain: "streame-2e066.firebaseapp.com",
    projectId: "streame-2e066",
    storageBucket: "streame-2e066.appspot.com",
    messagingSenderId: "226823067970",
    appId: "1:226823067970:web:5d90acd31c7c77da35d0db",
    measurementId: "G-DCBP6THP9P"
  })

  export const auth = firebaseConfig.auth()
  export default firebaseConfig