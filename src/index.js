import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { FirebaseContext } from './Components/store/Context';
import firebase from './Components/firebase/config'
import Context from './Components/store/Context'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <FirebaseContext.Provider value={{ firebase }}>
    <Context>
      <App />
    </Context>
  </FirebaseContext.Provider>
);
