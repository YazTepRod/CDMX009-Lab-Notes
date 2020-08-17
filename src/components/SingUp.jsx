import React from 'react'

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
          <label htmlFor="email"> Correo Electrónico</label>
          <input type="email" class="start" id="email" placeholder="User" onChange={(e)=>setEmail(e.target.value)}/>
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
          <button onClick={submit}> Ingresar </button>
          <button onClick={login}> Crear Cuenta </button>
          </div>
         }
         {
             user && <button onClick={logout}>Cerrar Sesión</button>
         }
           </div>
           
    )
}
