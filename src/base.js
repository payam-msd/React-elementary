//* This file contain the <FIREBASE> Config and initialization

import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyA5Z0glc9SVtRpucannKbFhiSlkmDwlQlo',
  authDomain: 'my-react-project-89236.firebaseapp.com',
  databaseURL: 'https://my-react-project-89236.firebaseio.com',
});

const base = Rebase.createClass(firebaseApp.database());
// ? This is a name export
export { firebaseApp };
// ? This is a default export
export default base;
