import React, { useState } from 'react'
import '../components/components.css/SingIn.css'
import 'firebase/auth';
import { useFirebaseApp, useUser } from 'reactfire';
import { Form, Button, Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export default (props) => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const firebase = useFirebaseApp();
    const user = useUser();

    const submit = async ()=>{
        await firebase.auth().createUserWithEmailAndPassword(email,password);
       /*  console.log(email,password); */
}

const login = async ()=>{
    await firebase.auth().signInWithEmailAndPassword(email,password);

}
    const logout = async ()=>{
    await firebase.auth().signOut();
}
    return(
    <div>
        
        {
            !user &&
        <div>
            <Container>
                <Row>
            <Form>
             <Col xs={12} sm={9} md={9} lg={9} xl={9} className='start'>
            <Form.Group controlId="formBasicEmail">

              <Form.Control 
              type="email" 
              className="inputSingIn"
              value = { email }
              placeholder="User" 
              onChange={(e)=>setEmail(e.target.value)} />
              </Form.Group>
                

             <Form.Group controlId="formBasicPassword">

            <Form.Control 
            type="password" 
            className = "PassSingIn"
            placeholder="Password"
            value = { password }
            onChange={(e)=>setPassword(e.target.value)}/>
            </Form.Group>
            </Col>

            <Col xs={12} sm={true} md={9} lg={9} xl={9} className='open'>
            <Button 
            onClick={submit} 
            variant="primary"
            className="ButtonSingIn" 
             type="submit" block>
            Ingresar
            </Button>

            <Button 
            onClick={submit} 
            variant="secondary"
            className="ButtonCreate"
             type="submit" block>
              Crear Cuenta
            </Button>
           </Col>
          </Form>
          </Row>
        </Container>
    </div>
    
   /*  <div>
          <label htmlFor="email"> Correo Electrónico</label>
          <input type="email" class="start" id="email" placeholder="User" onChange={(e)=>setEmail(e.target.value)}/>
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
          <button onClick={submit}> Ingresar </button>
          <button onClick={login}> Crear Cuenta </button>
          </div> */
         }
         {
             user && <button onClick={logout}>Cerrar Sesión</button>
         }
           </div>
           
    )
}

