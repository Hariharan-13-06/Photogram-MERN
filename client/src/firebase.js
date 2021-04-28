import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDcnhOvS1bQT6XGEl8Do-YNcTDaLsovzk4",
    authDomain: "photogram-cff28.firebaseapp.com",
    projectId: "photogram-cff28",
    storageBucket: "photogram-cff28.appspot.com",
    messagingSenderId: "983259190504",
    appId: "1:983259190504:web:99b7be8e091d7631a6655d"
  };

export const fire = firebase.initializeApp(firebaseConfig);
