// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHN8bgF525counPGnl6qliYg0zVd1Qjyw",
  authDomain: "to-do-list-d3d27.firebaseapp.com",
  projectId: "to-do-list-d3d27",
  storageBucket: "to-do-list-d3d27.appspot.com",
  messagingSenderId: "381245651956",
  appId: "1:381245651956:web:0c39e76221518f540017a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const querySnapshot = await getDocs(collection(db, "tasks"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});