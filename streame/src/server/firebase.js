import firebase from "firebase/compat/app";
import database from "firebase/compat/database";

const firebaseConfig = {
    apiKey:'AIzaSyCWf86SuAbS5Rus76MC9vLPsgLnh0Y8jcI',
    databaseURL: 'https://streame-2e066-default-rtdb.europe-west1.firebasedatabase.app/'
};

firebase.initializeApp(firebaseConfig);

let dbRef = firebase.database().ref();

export let connectedRef = firebase.database().ref(".info/connected")

export const userName = prompt("What's your name?");

const urlParams = new URLSearchParams(window.location.search);
const roomId = urlParams.get("id");

if (roomId) {
    dbRef = dbRef.child(roomId);
} else {
    dbRef = dbRef.push();
    window.history.replaceState(null, "Meet", "?id="+dbRef.key);
}

export default dbRef;