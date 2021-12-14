import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBcdW22Slk2XyOFvnNlumHNo1N7-NkGpj4",
  authDomain: "ayahimi-project.firebaseapp.com",
  projectId: "ayahimi-project",
  storageBucket: "ayahimi-project.appspot.com",
  messagingSenderId: "935606232623",
  appId: "1:935606232623:web:e4e7907cfbafaf8c5208da",
  measurementId: "G-V254RVQ98B",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
