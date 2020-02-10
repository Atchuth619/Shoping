import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


const config = {
    apiKey: "AIzaSyCnMWaP2ks2dBUUvTfAit9VfJdgFTdqkUo",
    authDomain: "myshop-db-9e4fc.firebaseapp.com",
    databaseURL: "https://myshop-db-9e4fc.firebaseio.com",
    projectId: "myshop-db-9e4fc",
    storageBucket: "myshop-db-9e4fc.appspot.com",
    messagingSenderId: "420877617578",
    appId: "1:420877617578:web:eea5fe6c5dff9ba65483d3",
    measurementId: "G-YDN37FJEEZ"
}

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;