// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNKoSHyl9mDf6gPXCcvaOqu197h0vXrE8",
  authDomain: "dashboard-react-js.firebaseapp.com",
  projectId: "dashboard-react-js",
  storageBucket: "dashboard-react-js.appspot.com",
  messagingSenderId: "317847294777",
  appId: "1:317847294777:web:22b5319ca96dc303a3cee8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;