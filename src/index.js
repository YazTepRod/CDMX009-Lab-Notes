<<<<<<< HEAD
import React from 'react';
=======
import React, { Suspense } from 'react';
>>>>>>> e05b26f4be5904110047981a7c05c7495f75daf0
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
<<<<<<< HEAD

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
=======
import firebaseConfig from './firebase-config';
import  { FirebaseAppProvider }  from 'reactfire'

ReactDOM.render((
    <FirebaseAppProvider firebaseConfig= { firebaseConfig }>
    <Suspense fallback={<p>Cargando...</p>}>
    <App />
    </Suspense>
    </FirebaseAppProvider>
    ),
     document.getElementById('root'));
>>>>>>> e05b26f4be5904110047981a7c05c7495f75daf0

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
<<<<<<< HEAD
=======


>>>>>>> e05b26f4be5904110047981a7c05c7495f75daf0
