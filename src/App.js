import React from 'react';
<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenido a Lab-Notes
        </p>
       
      </header>
=======
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import SingIn from './components/SingIn';
//import SingUp from './components/SingUp';
import Notes from './components/Notes';
import { useFirebaseApp } from 'reactfire';
import {  useUser } from 'reactfire';



function App() {
  const user = useUser();
  const firebase = useFirebaseApp();
  /* console.log(firebase); */

  let isLogin=false
  console.log(isLogin)

  return (
    <div className="App">
      { user && <p>Usuario:{user.email}</p>}
   {isLogin===true?
   <Router>
   <div className="container">
     <Switch>
       <Route path="/">
         <Notes />
       </Route>
     </Switch>
   </div>
   </Router>
   :<span>
   <SingIn/>
   <Router>
    <div className="container">
      <Switch>
        <Route path="/singIn">
          <SingIn />
        </Route>
        <Route path="/singUp">
          
        </Route>
        <Route path="/notes">
          <Notes />
        </Route>
      </Switch>
    </div>
    </Router>
    </span>
   }
>>>>>>> e05b26f4be5904110047981a7c05c7495f75daf0
    </div>
  );
}

export default App;
