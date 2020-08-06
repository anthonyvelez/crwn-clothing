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

export const createUserProfileDocument = async (
	userAuth,
	...additionalData
) => {
	if (!userAuth) return;

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
			});
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}

	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
