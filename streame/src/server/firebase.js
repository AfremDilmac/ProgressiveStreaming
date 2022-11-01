import firebase from "firebase/compat/app";
import database from "firebase/compat/database";

const firebaseConfig = {
    apiKey:'AIzaSyCWf86SuAbS5Rus76MC9vLPsgLnh0Y8jcI',
    databaseURL: 'https://streame-2e066-default-rtdb.europe-west1.firebasedatabase.app/'
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase;

var firepadRef = firebase.database().ref();

//Get user name exported in this variable
export const userName = prompt("What's your name?");

const urlparams = new URLSearchParams(window.location.search);
const roomId = urlparams.get("id");

//Check if room id is present or not
//Update reference with the roomid
if (roomId) {
  firepadRef = firepadRef.child(roomId);
} 
//Create a new room and get the reference
else {
  firepadRef = firepadRef.push();
  window.history.replaceState(null, "Meet", "?id=" + firepadRef.key);
}

export default firepadRef;
