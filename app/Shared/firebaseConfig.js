// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBx50w4qWEJSJnKLMhk-jIgJbfyesNMNzk",
  authDomain: "santrest-b220a.firebaseapp.com",
  projectId: "santrest-b220a",
  storageBucket: "santrest-b220a.appspot.com",
  messagingSenderId: "831465485108",
  appId: "1:831465485108:web:dd6806fc5a4f18c9026b61",
  measurementId: "G-HP5JXDJXKX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);