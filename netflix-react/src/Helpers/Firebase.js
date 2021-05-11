import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBx-SlVbEebxNEkFU_NK8z4ymUP6HWCA1Q",
  authDomain: "netflix-clone-f8232.firebaseapp.com",
  projectId: "netflix-clone-f8232",
  storageBucket: "netflix-clone-f8232.appspot.com",
  messagingSenderId: "91844727641",
  appId: "1:91844727641:web:f4a9a9b3a5c7c1660c3248",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
