import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMwne4AqDzU6adTAnYF3Cv8MljffIu1nU",
  authDomain: "ruta-n-82d7b.firebaseapp.com",
  projectId: "ruta-n-82d7b",
  storageBucket: "ruta-n-82d7b.appspot.com",
  messagingSenderId: "427985347148",
  appId: "1:427985347148:web:cdaef6273370eb86848ae9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
