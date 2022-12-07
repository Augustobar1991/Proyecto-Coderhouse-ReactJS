import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from 'firebase/app';

initializeApp({
  apiKey: "AIzaSyDlCNdQpiwf16oN8pdrnSjmVXsBeSX27Pw",
  authDomain: "la-casa-de-las-llantas-7aff1.firebaseapp.com",
  projectId: "la-casa-de-las-llantas-7aff1",
  storageBucket: "la-casa-de-las-llantas-7aff1.appspot.com",
  messagingSenderId: "908601378026",
  appId: "1:908601378026:web:5a3be72bd998e006f8c393"
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
reportWebVitals();
