import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithPopup,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
} from 'firebase/auth';
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

const registerGoogle = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider).then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const { user } = result;
        console.log(token, user);
    });
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

export { userRegister, registerGoogle, loginEmailPassword }