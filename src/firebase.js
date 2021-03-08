import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC6zQasPnTAunXW4QyakGs-0KIVu9Nzm5c",
    authDomain: "slack-build-9c7d4.firebaseapp.com",
    projectId: "slack-build-9c7d4",
    storageBucket: "slack-build-9c7d4.appspot.com",
    messagingSenderId: "857373290865",
    appId: "1:857373290865:web:016b5dc2bd884eee1f46d0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider}
  export default db;

 