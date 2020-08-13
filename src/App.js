import React from 'react';
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import SingIn from './components/SingIn';
import SingUp from './components/SingUp';
import Notes from './components/Notes';
import { useFirebaseApp } from 'reactfire';
import {  useUser } from 'reactfire';



function App() {
  const user = useUser();
  const firebase = useFirebaseApp();
  /* console.log(firebase); */
  return (
    <div className="App">
      { user && <p>Usuario:{user.email}</p>}
      <SingIn/>
   <Router>
    <div className="container">
      <Switch>
        <Route path="/singIn">
          <SingIn />
        </Route>
        <Route path="/singUp">
          <SingUp />
        </Route>
        <Route path="/notes">
          <Notes />
        </Route>
      </Switch>
    </div>
    </Router>
    </div>
  );
}

export default App;
