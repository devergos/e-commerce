import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyARjiaSWdapoat8ZLyin9FOfJ3p94BA3Jg",
    authDomain: "crwn-db-49903.firebaseapp.com",
    databaseURL: "https://crwn-db-49903.firebaseio.com",
    projectId: "crwn-db-49903",
    storageBucket: "crwn-db-49903.appspot.com",
    messagingSenderId: "437683085910",
    appId: "1:437683085910:web:0c652cc9a932d1873451f7"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    console.log('userAuth:', userAuth.uid)
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }

    }

    return userRef
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;