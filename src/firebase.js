import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCHFy-mOJ4U1CA2AAYmtFZVsI0tY--taxk",
  authDomain: "otp-app-493fd.firebaseapp.com",
  projectId: "otp-app-493fd",
  storageBucket: "otp-app-493fd.appspot.com",
  messagingSenderId: "477951517145",
  appId: "1:477951517145:web:5d101bffc6884c1af939c8"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
export default firebase
