import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBKv2h_QB5j3NpBRAxlb8EdQmjvWlZHQMg",
  authDomain: "fir-firestore-16db0.firebaseapp.com",
  projectId: "fir-firestore-16db0",
  storageBucket: "fir-firestore-16db0.appspot.com",
  messagingSenderId: "448943632503",
  appId: "1:448943632503:web:6300abc98f1a44026a1672",
  measurementId: "G-GRV2BK09ZC",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
