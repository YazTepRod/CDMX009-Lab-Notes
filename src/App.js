import React from 'react';
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
    </div>
  );
}

export default App;
