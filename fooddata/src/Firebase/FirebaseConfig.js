
// import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDiMQsmC_2RRoZAlHfXswkslCqMoxCYcJ0",
  authDomain: "foodie-94876.firebaseapp.com",
  projectId: "foodie-94876",
  storageBucket: "foodie-94876.appspot.com",
  messagingSenderId: "871938725242",
  appId: "1:871938725242:web:7cd4b90b1ada05612332c3",
  measurementId: "G-NTE0FMYRQC"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);

export {db, storage};