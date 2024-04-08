import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
export const firebaseConfig = {
    apiKey: "AIzaSyC-07Ifv0p_Wal_-udWcmMaX0_MDWMvOnw",
    authDomain: "terrea-90caa.firebaseapp.com",
    projectId: "terrea-90caa",
    storageBucket: "terrea-90caa.appspot.com",
    messagingSenderId: "377575374541",
    appId: "1:377575374541:web:74eaabd8a2346b2e2bf384",
    measurementId: "G-PZ3FVFM2C9"
  };

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
