import * as firebase from "firebase/app";
// Required for side-effects
require("firebase/firestore");

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAGFehRTcE1j4YDelRCdfDZD2KEtRkWiPI",
    authDomain: "oddaj-rzeczy-206b3.firebaseapp.com",
    projectId: "oddaj-rzeczy-206b3"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

export {fire, db};