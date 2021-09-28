
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBtZZwR_74dB0C5pXPuQr4vtpvOcWcHD-8",
    authDomain: "bookme-lite.firebaseapp.com",
    projectId: "bookme-lite",
    storageBucket: "bookme-lite.appspot.com",
    messagingSenderId: "155691508082",
    appId: "1:155691508082:web:f854b8678a6ea7cc797deb",
    measurementId: "G-9K768T28JX"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  
//   firebase important functions
const auth = firebase.auth();
const db = firebase.firestore();
