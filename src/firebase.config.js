import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage,ref  } from "firebase/storage";

const firebaseConfig = {
  // apiKey: "AIzaSyCMLkDSGY7Ki9nUJzCc1WR8CFG1VUEpM-E",
  // authDomain: "animalstore-7500e.firebaseapp.com",
  // projectId: "animalstore-7500e",
  // storageBucket: "animalstore-7500e.appspot.com",
  // messagingSenderId: "759768519389",
  // appId: "1:759768519389:web:f3e0a071dc6fb4dd260134",
  // measurementId: "G-HEPYWLT4RL",
  apiKey: "AIzaSyCK21rQiiUhEzBVFhkPvQmfJa7853oMXaY",
  authDomain: "dragons-staking-frontend.firebaseapp.com",
  projectId: "dragons-staking-frontend",
  storageBucket: "dragons-staking-frontend.appspot.com",
  messagingSenderId: "868896254213",
  appId: "1:868896254213:web:762feaf5ec4c1b37836f6c",
  measurementId: "G-CV3QWH2ST7"
};

export default firebaseConfig;


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
