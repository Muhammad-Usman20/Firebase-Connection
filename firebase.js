// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBCMkDB4Wblx5Lhqblv-zDcrwWz1kPfApg",
    authDomain: "web-dev-course-42f1f.firebaseapp.com",
    projectId: "web-dev-course-42f1f",
    storageBucket: "web-dev-course-42f1f.firebasestorage.app",
    messagingSenderId: "695312263707",
    appId: "1:695312263707:web:f801eaa01867af3d0066be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {
    app,db
}