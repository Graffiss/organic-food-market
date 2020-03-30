import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = firebase.initializeApp({
	apiKey: 'AIzaSyDu7gRPw7sHL-9z3ij-MRaEgDOJXHMoHSA',
	authDomain: 'organic-food-market.firebaseapp.com',
	databaseURL: 'https://organic-food-market.firebaseio.com',
	appId: '1:686714875830:web:769aa43ac9e425159ddb17'
});

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
