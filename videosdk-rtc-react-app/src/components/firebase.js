// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, updateProfile} from "firebase/auth";
import { getStorage, uploadBytes, ref, getDownloadURL} from "firebase/storage";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCWf86SuAbS5Rus76MC9vLPsgLnh0Y8jcI",
    authDomain: "streame-2e066.firebaseapp.com",
    projectId: "streame-2e066",
    storageBucket: "streame-2e066.appspot.com",
    messagingSenderId: "226823067970",
    appId: "1:226823067970:web:5d90acd31c7c77da35d0db",
    measurementId: "G-DCBP6THP9P"
}
export const app =initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()

// Storage
export async function upload(file, currentUser, setLoading) {
    const fileRef = ref(storage, currentUser.uid + '.png');
  
    setLoading(true);
    
    const snapshot = await uploadBytes(fileRef, file);
    const photoURL = await getDownloadURL(fileRef);
  
    updateProfile(currentUser, {photoURL});
    
    setLoading(false);
    alert("Uploaded file!");
  }

