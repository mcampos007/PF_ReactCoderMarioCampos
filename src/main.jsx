// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBGlrQdJglWJ3PnxGUAH2-OHmnY34UjteQ',
  authDomain: 'ecommerce-e718b.firebaseapp.com',
  projectId: 'ecommerce-e718b',
  storageBucket: 'ecommerce-e718b.appspot.com',
  messagingSenderId: '669135752807',
  appId: '1:669135752807:web:16549352fba8741477cec2',
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
