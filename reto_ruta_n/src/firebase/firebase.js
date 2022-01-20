import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
    collection,
    addDoc,
    onSnapshot,
    doc,
    query,
    updateDoc,
    deleteDoc,
    where,
} from 'firebase/firestore';
import { useNavigate } from "react-router-dom";
import { db } from './firebaseConfig';

const userRegister = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
            console.log('then login');
            // Signed in
            const { user } = userCredential;
            console.log(user);
        }
    );
};



const loginEmailPassword = (email, password) => {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user, 'AQUI ESTOY');
            // ...
        });

};


export { userRegister, loginEmailPassword };