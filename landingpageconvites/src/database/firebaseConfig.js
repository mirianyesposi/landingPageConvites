// firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBS8zP65Q8WTk_90_7ddWGnVc6xaBGIy5k",
  authDomain: "landingpage-20969.firebaseapp.com",
  projectId: "landingpage-20969",
  storageBucket: "landingpage-20969.appspot.com",
  messagingSenderId: "797439256797",
  appId: "1:797439256797:web:5800abc4b9f0733db99334"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
