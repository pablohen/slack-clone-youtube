import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyADsv0QtsONVDwOc30qLNsCZu7Kshz3jbk",
  authDomain: "slack-clone-yt-1d7ca.firebaseapp.com",
  projectId: "slack-clone-yt-1d7ca",
  storageBucket: "slack-clone-yt-1d7ca.appspot.com",
  messagingSenderId: "384463728698",
  appId: "1:384463728698:web:d0c0ef28346ca861f08503",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
