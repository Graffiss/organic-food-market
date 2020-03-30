import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = firebase.initializeApp({
	apiKey: 'AIzaSyDu7gRPw7sHL-9z3ij-MRaEgDOJXHMoHSA',
	authDomain: 'organic-food-market.firebaseapp.com',
	databaseURL: 'https://organic-food-market.firebaseio.com',
	projectId: 'organic-food-market',
	storageBucket: 'organic-food-market.appspot.com',
	messagingSenderId: '686714875830',
	appId: '1:686714875830:web:769aa43ac9e425159ddb17'
});

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
