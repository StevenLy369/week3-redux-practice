import * as firebase from 'firebase';
import 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID 
// }

const firebaseConfig = {
    apiKey: "AIzaSyCSr67lDYe-0u2S_Hvw81i0yxrrB2g2oSM",
    authDomain: "redux-help-queue-bc046.firebaseapp.com",
    databaseURL: "https://redux-help-queue-bc046.firebaseio.com",
    projectId: "redux-help-queue-bc046",
    storageBucket: "redux-help-queue-bc046.appspot.com",
    messagingSenderId: "678677699350",
    appId: "1:678677699350:web:283438f3e99ef4dfbace37"
  };

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;