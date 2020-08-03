import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey            : 'AIzaSyCtt-iq6TkANISNFZLE65vpwXWFfJpIRKk',
	authDomain        : 'crwn-db-77ea8.firebaseapp.com',
	databaseURL       : 'https://crwn-db-77ea8.firebaseio.com',
	projectId         : 'crwn-db-77ea8',
	storageBucket     : 'crwn-db-77ea8.appspot.com',
	messagingSenderId : '229289620849',
	appId             : '1:229289620849:web:b4fda7b6811954a078f2d0'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
