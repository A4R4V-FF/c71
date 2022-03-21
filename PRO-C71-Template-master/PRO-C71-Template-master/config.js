import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyCt-zFF2UZZjLzRdk3VJ7xznrvcHa154jk",
    authDomain: "project-2148899300820800674.firebaseapp.com",
    projectId: "project-2148899300820800674",
    storageBucket: "project-2148899300820800674.appspot.com",
    messagingSenderId: "285515976991",
    appId: "1:285515976991:web:ad91e08f33fcb5aa10602a",
    measurementId: "G-P9V876Y0DX"
  };

//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
